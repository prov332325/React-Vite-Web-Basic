import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere } from '@react-three/drei'
import { useRef, useState } from 'react'

// 회전하는 카드 컴포넌트
function RotatingCard({ position, color, speed = 1 }) {
  const meshRef = useRef()
  const [hovered, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Box
      ref={meshRef}
      args={[2, 3, 0.1]}
      position={position}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={clicked ? 1.2 : hovered ? 1.1 : 1}
    >
      <meshStandardMaterial 
        color={hovered ? '#ff6b6b' : color} 
        metalness={0.3}
        roughness={0.4}
      />
    </Box>
  )
}

// 떠다니는 구체들
function FloatingSpheres() {
  const spheres = useRef([])

  useFrame((state) => {
    spheres.current.forEach((sphere, i) => {
      if (sphere) {
        sphere.position.y = Math.sin(state.clock.elapsedTime + i) * 2 + 5
        sphere.rotation.x += 0.01
        sphere.rotation.y += 0.01
      }
    })
  })

  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Sphere
          key={i}
          ref={(el) => (spheres.current[i] = el)}
          args={[0.3, 16, 16]}
          position={[
            (i - 2) * 4,
            Math.sin(i) * 2 + 5,
            Math.cos(i) * 2
          ]}
        >
          <meshStandardMaterial 
            color={`hsl(${i * 60}, 70%, 60%)`}
            transparent
            opacity={0.8}
          />
        </Sphere>
      ))}
    </>
  )
}

// 메인 3D 씬 컴포넌트
function ThreeDScene() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        {/* 조명 */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />

        {/* 카드들 */}
        <RotatingCard 
          position={[-4, 0, 0]} 
          color="#4ecdc4" 
          speed={1}
        />
        <RotatingCard 
          position={[0, 0, 0]} 
          color="#45b7d1" 
          speed={1.2}
        />
        <RotatingCard 
          position={[4, 0, 0]} 
          color="#96ceb4" 
          speed={0.8}
        />

        {/* 떠다니는 구체들 */}
        <FloatingSpheres />

        {/* 컨트롤 */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxDistance={20}
          minDistance={5}
        />
      </Canvas>
    </div>
  )
}

export default ThreeDScene 