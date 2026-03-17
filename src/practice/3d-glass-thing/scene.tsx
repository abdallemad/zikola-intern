'use client';
import { Environment, MeshTransmissionMaterial, OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'

export default function GlassScene() {

  return <>
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 3, 2]} intensity={1} />
      {/* <OrbitControls /> */}
      <Environment preset="city" />
      <Model />
    </Canvas>
  </>
}

function Model() {
  const { viewport } = useThree()
  const torusRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += .03;
    }
  })
  return <group scale={viewport.width / 9}>
    <mesh ref={torusRef} rotation={[0, Math.PI / 4, 0]}>
      <torusGeometry args={[0.6, 0.3, 32, 64]} />
      <MeshTransmissionMaterial
        thickness={0.2}
        chromaticAberration={0.02}
        anisotropy={0.1}
        ior={1.5}
        backside
      />
    </mesh>
    <Text font="/fonts/font.ttf" position={[0, 0, -1]}>
      hello world
    </Text>
  </group>
}