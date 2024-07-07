
import { Text, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/example/untitled.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[0, 0.147, 0]} scale={[15.471, 0.159, 11.93]} />
      <Sesh setModal={props.setModal}>
        <mesh geometry={nodes.Куб.geometry} material={materials.Материал} position={[9.123, 5, 4.124]} rotation={[-Math.PI, 0, 0]} scale={[-2.463, -4.77, -1.696]}>
          <meshStandardMaterial color="red" />
          <Text color="black" fontSize={0.3} fontWeight={900} anchorX={0} anchorY={-1.4} strokeWidth={"10"} strokeColor="black">
            A
          </Text>
        </mesh>
      </Sesh>
      <Sesh setModal={props.setModal}>
        <mesh geometry={nodes.Куб001.geometry} material={materials.Материал} position={[4.084, 5, 4.124]} rotation={[-Math.PI, 0, 0]} scale={[-2.463, -4.77, -1.696]}>
          <meshStandardMaterial color="red" />
          <Text color="black" fontSize={0.3} fontWeight={900} anchorX={-0.8} anchorY={-1.4} strokeWidth={"10"} strokeColor="black">
            B
          </Text>
        </mesh>
      </Sesh>
      <Sesh setModal={props.setModal}>
        <mesh geometry={nodes.Куб002.geometry} material={materials.Материал} position={[-4.828, 5, 4.124]} rotation={[-Math.PI, 0, 0]} scale={[-2.463, -4.77, -1.696]}>
          <meshStandardMaterial color="red" />
          <Text color="black" fontSize={0.3} fontWeight={900} anchorX={-0.8} anchorY={-1.4} strokeWidth={"10"} strokeColor="black">
            C
          </Text>
        </mesh>
      </Sesh>
      <Sesh setModal={props.setModal}>
        <mesh geometry={nodes.Куб003.geometry} material={materials.Материал} position={[-4.828, 5, -4.06]} rotation={[-Math.PI, 0, 0]} scale={[-2.463, -4.77, -1.696]}>
          <meshStandardMaterial color="red" />
          <Text color="black" fontSize={0.3} fontWeight={900} anchorX={-0.8} anchorY={-1.4} strokeWidth={"10"} strokeColor="black">
            D
          </Text>
        </mesh>
      </Sesh>
    </group>
  )
}

function Sesh({ children, setModal }) {
  const [state, setState] = useState(true)
  let a = document.querySelector(".fucker")

  let git = children.props.children.map(item => {
    if (item.props.color == "red") {
      return item
    } else {
      return {
        ...item,
        props: {
          ...item.props,
          onPointerEnter: (e) => {
            e.stopPropagation();
            setModal(false)
            if (!!a) {
              a.style.left = `${e.layerX + 10}px`
              a.style.top = `${e.layerY + 10}px`
            }
          },
          onPointerLeave: () => {
            setModal(true)
          }
        }
      }
    }
  })

  let run = {
    ...children,
    props: {
      ...children.props,
      onPointerEnter: (e) => {
        e.stopPropagation();
        setState(false)
      },
      onPointerLeave: (e) => {
        e.stopPropagation();
        setState(true)
      },
      children: git
    }
  }

  if (state) run.props.children = run.props.children.filter((_, index) => index == 1)

  return run
}

useGLTF.preload('/example/untitled.glb')
