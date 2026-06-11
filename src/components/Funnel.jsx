// src/components/WireframeFunnel.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
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

function SignalTrail({ points, speed = 0.18, trailSize = 38, offset = 0 }) {
  const trailMatRef = useRef();

  const geometry = useMemo(() => {
    const positions = new Float32Array(trailSize * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [trailSize]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const time = elapsed * speed + offset;

    const progress = time % 1;
    const deadZone = 0;
    const visible = progress < 1 - deadZone;

    const headIndex = Math.floor(progress * points.length);
    const position = geometry.attributes.position;

    for (let i = 0; i < trailSize; i++) {
      const index = Math.max(0, headIndex - i);
      const point = points[index];

      position.setXYZ(i, point.x, point.y, point.z);
    }

    position.needsUpdate = true;

    if (trailMatRef.current) {
      trailMatRef.current.opacity = visible ? 0.95 : 0;
    }
  });

  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        ref={trailMatRef}
        color={LIGHT_BLUE}
        transparent
        opacity={0.95}
      />
    </line>
  );
}

/**
 * t = 0 → top rim
 * t = 1 → bottom rim
 */
function getFunnelPoint({
  t,
  angle,
  topRadius = 2.6,
  bottomRadius = 1.1,
  twist = 0,
  bend = 0.0,
}) {
  const y = THREE.MathUtils.lerp(2.1, -2.1, t);

  const inward = Math.sin(Math.pow(t, 0.7) * Math.PI) * 0.55;
  const linearBlend = THREE.MathUtils.lerp(topRadius, bottomRadius, t);
  const radius = linearBlend - inward;

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

  const activeSignalLines = useMemo(() => {
    return verticalLines.filter((_, index) =>
      [1, 5, 9, 13, 17, 21, 25].includes(index),
    );
  }, [verticalLines]);

  return (
    <group ref={groupRef} rotation={[0.18, -0.35, 0]}>
      {ringLines.map((points, index) => (
        <StaticLine key={`ring-${index}`} points={points} opacity={0.11} />
      ))}

      {verticalLines.map((points, index) => (
        <StaticLine key={`vertical-${index}`} points={points} opacity={0.12} />
      ))}

      {activeSignalLines.map((points, index) => (
        <SignalTrail
          key={`signal-trail-${index}`}
          points={points}
          speed={0.12 + index * 0.025}
          trailSize={44}
          offset={index * 0.15}
        />
      ))}
    </group>
  );
}

export default function WireframeFunnel() {
  return (
    <div className="pointer-events-none relative z-0 h-[min(640px,80vw)] w-[min(640px,80vw)]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Funnel />
      </Canvas>
    </div>
  );
}
