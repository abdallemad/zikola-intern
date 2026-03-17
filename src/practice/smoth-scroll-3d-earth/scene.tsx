'use client'
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { a, useSpring } from '@react-spring/three'
import { useRef, useEffect } from "react";
import * as THREE from 'three';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'


export default function SmoothEearthScroll() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} className="">
      {/* <ambientLight intensity={0.51} /> */}
      <directionalLight position={[4, 0, -0.5]} intensity={3} />
      {/* <OrbitControls /> */}
      <Eearth />
    </Canvas>
  )
}

function Eearth() {
  const texture = useTexture('/textures/earth-gray.png')
  const earthRef = useRef<THREE.Mesh>(null)
  const [spring, api] = useSpring(() => ({
    from: { rotation: 0 }
  }))
  const scrollProgress = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: ".earth-scroll-base",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.current = self.progress
      },
    })

    function handleScroll() {
      api.start({
        rotation: scrollProgress.current * Math.PI * 2 / 3
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])




  return (
    <a.mesh ref={earthRef} rotation={spring.rotation.to(r => [0, r, 0])}>
      <sphereGeometry args={[2, 140, 140]} />
      <meshStandardMaterial
        map={texture}
        bumpMap={texture}
        bumpScale={5}
      />
    </a.mesh>
  )
}