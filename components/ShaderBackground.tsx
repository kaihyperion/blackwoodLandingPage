'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  // Create shader material
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2() },
        mouse: { value: new THREE.Vector2() },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform vec2 mouse;
        
        varying vec2 vUv;
        varying vec3 vPosition;
        
        // Noise functions
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }
        
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                     mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        
        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 1.0;
          for (int i = 0; i < 5; i++) {
            value += amplitude * noise(p * frequency);
            amplitude *= 0.5;
            frequency *= 2.0;
          }
          return value;
        }
        
        void main() {
          vec2 uv = vUv;
          vec2 p = uv * 3.0;
          
          // Animate the noise
          p += time * 0.1;
          
          // Create layered noise for paper texture
          float noise1 = fbm(p);
          float noise2 = fbm(p * 2.0 + time * 0.05);
          float noise3 = fbm(p * 4.0 - time * 0.03);
          
          // Combine noise layers
          float paper = noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2;
          
          // Add some variation based on position
          float variation = sin(uv.x * 10.0 + time) * 0.1 + cos(uv.y * 8.0 - time * 0.5) * 0.1;
          
          // Create subtle color variations
          vec3 color1 = vec3(0.9, 0.85, 0.8); // Warm paper color
          vec3 color2 = vec3(0.8, 0.75, 0.7); // Slightly darker
          vec3 color3 = vec3(0.95, 0.9, 0.85); // Lighter highlight
          
          // Mix colors based on noise
          vec3 finalColor = mix(color1, color2, paper);
          finalColor = mix(finalColor, color3, variation * 0.3);
          
          // Add subtle gradient
          float gradient = smoothstep(0.0, 1.0, uv.y);
          finalColor = mix(finalColor, finalColor * 0.9, gradient * 0.2);
          
          // Add some depth with shadows
          float shadow = smoothstep(0.4, 0.6, paper);
          finalColor *= 1.0 - shadow * 0.1;
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    })
  }, [])

  useFrame((state) => {
    if (shaderMaterial) {
      shaderMaterial.uniforms.time.value = state.clock.elapsedTime
      shaderMaterial.uniforms.resolution.value.set(window.innerWidth, window.innerHeight)
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2, 2]} />
      <primitive object={shaderMaterial} />
    </mesh>
  )
}

export default function ShaderBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  )
}
