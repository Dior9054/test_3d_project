
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { useState } from 'react'
import { useId } from 'react'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/fuck/untitled.glb')

  return (
    <group {...props} dispose={null}>
      <Sesh id="1">
        <group position={[-30, 0, 219.986]}>
          <mesh geometry={nodes.polySurface3488_concrete_021_0_1.geometry} material={materials['concrete_02.1']}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.polySurface3488_concrete_021_0_2.geometry} material={materials['concrete_fine.1']}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.polySurface3488_concrete_021_0_3.geometry} material={materials['rooftop_01']}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.polySurface3488_concrete_021_0_4.geometry} material={materials['concrete_02.2']}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.polySurface3488_concrete_021_0_5.geometry} material={materials['rooftop_01.1']}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.polySurface3488_concrete_021_0_6.geometry} material={materials['concrete_02.3']}>
            <meshStandardMaterial color="aqua" />
          </mesh>
        </group>
      </Sesh>
      <Sesh id="2">
        <group>
          <mesh geometry={nodes.apartment_02_fine_build_01_0.geometry} material={materials.build_01}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0_1.geometry} material={materials.concrete_fine}>
            <meshStandardMaterial color="aqua" />
          </mesh>
        </group>
      </Sesh>
      <Sesh id="3">
        <group>
          <mesh geometry={nodes.apartment_02_fine_concrete_02_0.geometry} material={materials.concrete_02}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0006.geometry} material={materials.build_01}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0006_1.geometry} material={materials.concrete}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0006_2.geometry} material={materials.concrete_fine}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0006_3.geometry} material={materials.concrete_02}>
            <meshStandardMaterial color="aqua" />
          </mesh>
        </group>
      </Sesh>
      <Sesh id="4">
        <group>
          <mesh geometry={nodes.apartment_02_fine_build_01_0005.geometry} material={materials.build_01}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0005_1.geometry} material={materials.concrete}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0005_2.geometry} material={materials.concrete_fine}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0005_3.geometry} material={materials.concrete_02}>
            <meshStandardMaterial color="aqua" />
          </mesh>
        </group>
      </Sesh>
      <Sesh id="5">
        <group>
          <mesh geometry={nodes.apartment_02_fine_build_01_0004.geometry} material={materials.build_01}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0004_1.geometry} material={materials.concrete}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0004_2.geometry} material={materials.concrete_fine}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0004_3.geometry} material={materials.concrete_02}>
            <meshStandardMaterial color="aqua" />
          </mesh>
        </group>
      </Sesh>
      <Sesh id="6">
        <group>
          <mesh geometry={nodes.Cube.geometry} material={materials.Material}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0001.geometry} material={materials.build_01}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0001_1.geometry} material={materials.concrete}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0001_2.geometry} material={materials.concrete_fine}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0001_3.geometry} material={materials.concrete_02}>
            <meshStandardMaterial color="aqua" />
          </mesh>
        </group>
      </Sesh>
      <Sesh id="7">
        <group>
          <mesh geometry={nodes.apartment_02_fine_build_01_0003.geometry} material={materials.build_01}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0003_1.geometry} material={materials.concrete}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0003_2.geometry} material={materials.concrete_fine}>
            <meshStandardMaterial color="aqua" />
          </mesh>
          <mesh geometry={nodes.apartment_02_fine_build_01_0003_3.geometry} material={materials.concrete_02}>
            <meshStandardMaterial color="aqua" />
          </mesh>
        </group>
      </Sesh>
    </group>
  )
}

function Sesh({ children, id }) {
  let ID = useId() + id
  const [state, setState] = useState(true)

  let run = {
    ...children,
    props: {
      ...children.props,
      name: ID,
      onPointerOver: (e) => {
        console.log(run);
        if (e.eventObject.name == ID) {
          setState(false)
        }
      },
      onPointerLeave: () => {
        setState(true)
      },
      children: children.props.children.map(item => {
        return {
          ...item,
          props: {
            ...item.props,
          }
        }
      })
    }
  }


  if (state) {
    for (let key of run.props.children) {
      delete key.props.children
    }
  } else {
    run = {
      ...children,
      props: {
        ...children.props,
        name: ID,
        onPointerOver: (e) => {
          if (e.eventObject.name == ID) {
            setState(false)
          }
        },
        onPointerLeave: () => {
          setState(true)
        },
        children: children.props.children.map(item => {
          return {
            ...item,
            props: {
              ...item.props,
              children: item.props.children,
            }
          }
        })
      }
    }
  }

  return run
}

useGLTF.preload('/untitled.glb')

