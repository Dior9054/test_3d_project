
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Box } from '../components/Box'
import { useEffect } from 'react'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/house/untitled.gltf')
  let a = useRef()

  useEffect(() => {
    a.current.material.color.set(2, 3, 4)
  }, [])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      <Box color={[1, 2, 3]}>
        <group position={[-30, 0, 219.986]}>
          <mesh geometry={nodes.polySurface3488_concrete_021_0_1.geometry} material={materials['concrete_02.1']} />
          <mesh geometry={nodes.polySurface3488_concrete_021_0_2.geometry} material={materials['concrete_fine.1']} />
          <mesh geometry={nodes.polySurface3488_concrete_021_0_3.geometry} material={materials.rooftop_01} />
          <mesh geometry={nodes.polySurface3488_concrete_021_0_4.geometry} material={materials['concrete_02.2']} />
          <mesh geometry={nodes.polySurface3488_concrete_021_0_5.geometry} material={materials['rooftop_01.1']} />
          <mesh geometry={nodes.polySurface3488_concrete_021_0_6.geometry} material={materials['concrete_02.3']} />
        </group>
      </Box>
      <mesh geometry={nodes.apartment_02_fine_concrete_02_0.geometry} material={materials.concrete_02} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0.geometry} material={materials.build_01} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0_1.geometry} material={materials.concrete_fine} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0006.geometry} material={materials.build_01} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0006_1.geometry} material={materials.concrete} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0006_2.geometry} material={materials.concrete_fine} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0006_3.geometry} material={materials.concrete_02} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0005.geometry} material={materials.build_01} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0005_1.geometry} material={materials.concrete} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0005_2.geometry} material={materials.concrete_fine} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0005_3.geometry} material={materials.concrete_02} />
      {/* <Box color={[2, 3, 4]}> */}
      <group>
        <mesh geometry={nodes.apartment_02_fine_build_01_0004.geometry} material={materials.build_01} />
        <mesh geometry={nodes.apartment_02_fine_build_01_0004_1.geometry} material={materials.concrete} />
        <mesh geometry={nodes.apartment_02_fine_build_01_0004_2.geometry} material={materials.concrete_fine} />
      </group>
      {/* </Box> */}
      <mesh geometry={nodes.apartment_02_fine_build_01_0004_3.geometry} material={materials.concrete_02} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0001.geometry} material={materials.build_01} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0001_1.geometry} material={materials.concrete} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0001_2.geometry} material={materials.concrete_fine} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0001_3.geometry} material={materials.concrete_02} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0003.geometry} material={materials.build_01} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0003_1.geometry} material={materials.concrete} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0003_2.geometry} material={materials.concrete_fine} />
      <mesh geometry={nodes.apartment_02_fine_build_01_0003_3.geometry} material={materials.concrete_02} />
    </group>
  )
}

useGLTF.preload('/untitled.gltf')
