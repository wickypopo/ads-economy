// src/components/WireframeFunnel.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const BLUE = "#2563eb";
const LIGHT_BLUE = "#60a5fa";

function StaticLine({ points, opacity = 0.14 }) {
  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={BLUE} transparent opacity={opacity} />
    </line>
  );
}

function SignalTrail({
  points,
  speed = 0.18,
  trailSize = 38,
  offset = 0,
  dotSize = 0.045,
}) {
  const dotRef = useRef();
  const trailRef = useRef();

  const geometry = useMemo(() => {
    const positions = new Float32Array(trailSize * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [trailSize]);

  // We keep a separate material ref to control opacity
  const trailMatRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const time = elapsed * speed + offset;

    // progress 0→1: the signal travels from top to bottom
    const progress = time % 1;

    // "Dead zone": when progress is near the wrap (e.g. > 0.92),
    // we hide both dot and trail so the snap back to top is invisible.
    const deadZone = 0.1; // last 10% of the cycle is invisible
    const visible = progress < 1 - deadZone;

    const headIndex = Math.floor(progress * points.length);

    const position = geometry.attributes.position;

    for (let i = 0; i < trailSize; i++) {
      const index = Math.max(0, headIndex - i);
      const point = points[index];
      position.setXYZ(i, point.x, point.y, point.z);
    }
    position.needsUpdate = true;

    const headPoint = points[Math.min(headIndex, points.length - 1)];

    if (trailMatRef.current) {
      trailMatRef.current.opacity = visible ? 0.9 : 0;
    }

    if (dotRef.current) {
      dotRef.current.visible = visible;
      dotRef.current.position.set(headPoint.x, headPoint.y, headPoint.z);
      const pulse = 1 + Math.sin(elapsed * 8 + offset * 10) * 0.18;
      dotRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <>
      <line ref={trailRef} geometry={geometry}>
        <lineBasicMaterial
          ref={trailMatRef}
          color={LIGHT_BLUE}
          transparent
          opacity={0.9}
        />
      </line>

      <mesh ref={dotRef}>
        <sphereGeometry args={[dotSize, 16, 16]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.95} />
      </mesh>
    </>
  );
}

/**
 * getFunnelPoint – shaped like vorlage.jpg:
 *  - wide, slightly flared top opening
 *  - concave waist that pulls inward toward the middle
 *  - bottom that stays open with a visible flat rim (not a point)
 *
 * t = 0 → top rim (wide)
 * t = 1 → bottom rim (medium, open)
 */
function getFunnelPoint({
  t,
  angle,
  topRadius = 2.6,
  bottomRadius = 1.1, // open bottom – not zero
  height = 4.2,
  twist = 0,
  bend = 0.0,
}) {
  // Y: top is high, bottom is low
  const y = THREE.MathUtils.lerp(2.1, -2.1, t);

  // Shape profile: concave hourglass-like pull in the upper-middle section,
  // then flares slightly at the bottom again (like vorlage.jpg basket shape).
  // We use a custom ease: shape narrows sharply from top, then stabilises near bottom.
  const inward = Math.sin(Math.pow(t, 0.7) * Math.PI) * 0.55;
  const linearBlend = THREE.MathUtils.lerp(topRadius, bottomRadius, t);
  const radius = linearBlend - inward;

  // Slight x/z curve for organic feel
  const curveX = Math.sin(t * Math.PI) * bend;

  const finalAngle = angle + twist * t;

  return new THREE.Vector3(
    Math.cos(finalAngle) * radius + curveX,
    y,
    Math.sin(finalAngle) * radius,
  );
}

function Funnel() {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0013;
  });

  // Horizontal rings (evenly spaced top to bottom)
  const ringLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i <= 16; i++) {
      const t = i / 16;
      const points = [];
      for (let j = 0; j <= 260; j++) {
        const angle = (j / 260) * Math.PI * 2;
        points.push(getFunnelPoint({ t, angle, twist: 0.12 }));
      }
      lines.push(points);
    }
    return lines;
  }, []);

  // Vertical / meridian lines
  const verticalLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i < 28; i++) {
      const angle = (i / 28) * Math.PI * 2;
      const points = [];
      for (let j = 0; j <= 200; j++) {
        const t = j / 200;
        points.push(getFunnelPoint({ t, angle, twist: 0.24 }));
      }
      lines.push(points);
    }
    return lines;
  }, []);

  // Signal paths – travel top (t=0) → bottom (t=1)
  const signalLines = useMemo(() => {
    const lines = [];
    const paths = [
      { angle: 0.2, twist: 1.2 },
      { angle: 1.1, twist: 1.5 },
      { angle: 2.1, twist: 1.25 },
      { angle: 3.2, twist: 1.6 },
      { angle: 4.3, twist: 1.3 },
      { angle: 5.35, twist: 1.45 },
    ];

    paths.forEach(({ angle, twist }) => {
      const points = [];
      for (let i = 0; i <= 360; i++) {
        const t = i / 360;
        points.push(getFunnelPoint({ t, angle, twist, bend: 0.0 }));
      }
      lines.push(points);
    });

    return lines;
  }, []);

  return (
    <group ref={groupRef} rotation={[0.18, -0.35, 0]}>
      {ringLines.map((points, index) => (
        <StaticLine key={`ring-${index}`} points={points} opacity={0.11} />
      ))}

      {verticalLines.map((points, index) => (
        <StaticLine key={`vertical-${index}`} points={points} opacity={0.12} />
      ))}

      {/* faint ghost of signal paths */}
      {signalLines.map((points, index) => (
        <StaticLine
          key={`signal-base-${index}`}
          points={points}
          opacity={0.04}
        />
      ))}

      {/* animated trails – one-way top→bottom, invisible snap-back */}
      {signalLines.map((points, index) => (
        <SignalTrail
          key={`signal-trail-${index}`}
          points={points}
          speed={0.12 + index * 0.025}
          trailSize={44}
          offset={index * 0.15}
          dotSize={0.045}
        />
      ))}
    </group>
  );
}

export default function WireframeFunnel() {
  return (
    <div className="pointer-events-none z-0 h-[430px] w-[640px] opacity-90">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Funnel />
      </Canvas>
    </div>
  );
}
