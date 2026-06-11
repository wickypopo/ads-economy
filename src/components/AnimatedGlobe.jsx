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
  speed = 0.28,
  trailSize = 34,
  offset = 0,
  dotSize = 0.04,
}) {
  const dotRef = useRef();

  const geometry = useMemo(() => {
    const positions = new Float32Array(trailSize * 3);
    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return geometry;
  }, [trailSize]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const time = elapsed * speed + offset;
    const headIndex = Math.floor((time % 1) * points.length);

    const position = geometry.attributes.position;

    // Schweif liegt hinter dem Dot
    for (let i = 0; i < trailSize; i++) {
      const index = (headIndex - i + points.length) % points.length;
      const point = points[index];

      position.setXYZ(i, point.x, point.y, point.z);
    }

    position.needsUpdate = true;

    const headPoint = points[headIndex];

    if (dotRef.current) {
      dotRef.current.position.set(headPoint.x, headPoint.y, headPoint.z);

      const pulse = 1 + Math.sin(elapsed * 8 + offset * 10) * 0.18;
      dotRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <>
      <line geometry={geometry}>
        <lineBasicMaterial color={LIGHT_BLUE} transparent opacity={0.9} />
      </line>

      <mesh ref={dotRef}>
        <sphereGeometry args={[dotSize, 16, 16]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.95} />
      </mesh>
    </>
  );
}

function Globe() {
  const groupRef = useRef();
  const radius = 2;

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += 0.0018;
    groupRef.current.rotation.x = 0.12;
  });

  const latitudeLines = useMemo(() => {
    const lines = [];

    for (let lat = -75; lat <= 75; lat += 15) {
      const points = [];
      const theta = THREE.MathUtils.degToRad(90 - lat);

      for (let i = 0; i <= 240; i++) {
        const phi = (i / 240) * Math.PI * 2;

        points.push(
          new THREE.Vector3(
            radius * Math.sin(theta) * Math.cos(phi),
            radius * Math.cos(theta),
            radius * Math.sin(theta) * Math.sin(phi),
          ),
        );
      }

      lines.push(points);
    }

    return lines;
  }, []);

  const longitudeLines = useMemo(() => {
    const lines = [];

    for (let lon = 0; lon < 180; lon += 15) {
      const points = [];
      const phi = THREE.MathUtils.degToRad(lon);

      for (let i = 0; i <= 240; i++) {
        const t = (i / 240) * Math.PI * 2;

        points.push(
          new THREE.Vector3(
            radius * Math.cos(t) * Math.cos(phi),
            radius * Math.sin(t),
            radius * Math.cos(t) * Math.sin(phi),
          ),
        );
      }

      lines.push(points);
    }

    return lines;
  }, []);

  const signalLines = useMemo(() => {
    const lines = [];

    const rotations = [
      [0.35, 0.2, 0.1],
      [-0.45, 0.9, 0.35],
      [0.2, 1.8, -0.25],
      [-0.25, 2.6, 0.45],
      [0.55, 3.2, -0.15],
    ];

    rotations.forEach(([xRot, yRot, zRot]) => {
      const points = [];

      for (let i = 0; i <= 320; i++) {
        const t = (i / 320) * Math.PI * 2;

        const point = new THREE.Vector3(
          radius * Math.cos(t),
          radius * Math.sin(t),
          0,
        );

        point.applyEuler(new THREE.Euler(xRot, yRot, zRot));

        points.push(point);
      }

      lines.push(points);
    });

    return lines;
  }, []);

  return (
    <group ref={groupRef} rotation={[0.12, -0.45, 0]}>
      {latitudeLines.map((points, index) => (
        <StaticLine key={`lat-${index}`} points={points} opacity={0.13} />
      ))}

      {longitudeLines.map((points, index) => (
        <StaticLine key={`lon-${index}`} points={points} opacity={0.13} />
      ))}

      {signalLines.map((points, index) => (
        <StaticLine
          key={`signal-base-${index}`}
          points={points}
          opacity={0.045}
        />
      ))}

      {signalLines.map((points, index) => (
        <SignalTrail
          key={`signal-trail-${index}`}
          points={points}
          speed={0.08 + index * 0.04}
          trailSize={34}
          offset={index * 0.18}
          dotSize={0}
        />
      ))}
    </group>
  );
}

export default function WireframeGlobe() {
  return (
    <div className="pointer-events-none z-0 h-[640px] w-[640px] opacity-90">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Globe />
      </Canvas>
    </div>
  );
}
