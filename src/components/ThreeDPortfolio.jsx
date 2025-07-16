import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Text3D } from '@react-three/drei'
import { useRef, useState } from 'react'

// 회전하는 기술 스택 박스
function TechBox({ position, color, tech, speed = 1 }) {
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
      args={[1.5, 1.5, 1.5]}
      position={position}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={clicked ? 1.3 : hovered ? 1.1 : 1}
    >
      <meshStandardMaterial 
        color={hovered ? '#ff6b6b' : color} 
        metalness={0.5}
        roughness={0.2}
        transparent
        opacity={0.9}
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
        sphere.position.y = Math.sin(state.clock.elapsedTime + i) * 1.5 + 3
        sphere.rotation.x += 0.01
        sphere.rotation.y += 0.01
      }
    })
  })

  return (
    <>
      {[...Array(3)].map((_, i) => (
        <Sphere
          key={i}
          ref={(el) => (spheres.current[i] = el)}
          args={[0.2, 16, 16]}
          position={[
            (i - 1) * 3,
            Math.sin(i) * 1.5 + 3,
            Math.cos(i) * 1.5
          ]}
        >
          <meshStandardMaterial 
            color={`hsl(${i * 120}, 70%, 60%)`}
            transparent
            opacity={0.7}
          />
        </Sphere>
      ))}
    </>
  )
}

// 3D 씬 컴포넌트
function ThreeDScene() {
  return (
    <div className="w-full h-96">
      <Canvas
        camera={{ position: [0, 3, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        {/* 조명 */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff6b6b" />

        {/* 기술 스택 박스들 */}
        <TechBox 
          position={[-3, 0, 0]} 
          color="#61dafb" 
          tech="React"
          speed={1}
        />
        <TechBox 
          position={[0, 0, 0]} 
          color="#f7df1e" 
          tech="JavaScript"
          speed={1.2}
        />
        <TechBox 
          position={[3, 0, 0]} 
          color="#38bdf8" 
          tech="Three.js"
          speed={0.8}
        />

        {/* 떠다니는 구체들 */}
        <FloatingSpheres />

        {/* 컨트롤 */}
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          maxDistance={15}
          minDistance={5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

// 메인 포트폴리오 섹션
function ThreeDPortfolio() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">
            3D Interactive Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my skills and projects in an immersive 3D environment. 
            Click and interact with the elements to discover more about my work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D 씬 */}
          <div className="bg-black/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <ThreeDScene />
          </div>

          {/* 텍스트 내용 */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Frontend Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized in React, Vue.js, and modern JavaScript frameworks. 
                Creating responsive and interactive user interfaces with cutting-edge technologies.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">3D & WebGL</h3>
              <p className="text-gray-300 leading-relaxed">
                Experienced with Three.js and React Three Fiber for creating 
                immersive 3D web experiences and interactive visualizations.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Full-Stack Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Building complete web applications from database design to 
                deployment, with expertise in Node.js, Python, and cloud platforms.
              </p>
            </div>
          </div>
        </div>

        {/* 인터랙션 가이드 */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-white text-sm">💡</span>
            <span className="text-gray-300 text-sm">
              Click on the 3D elements to interact • Drag to rotate • Scroll to zoom
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThreeDPortfolio 