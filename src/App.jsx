import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

// import House from "./models/House"
// import Home from "./models/Untitled"
import Fuck from "./models/Fuck"

export default function App() {
  return (
    <Canvas camera={{ position: [5, -10, 500], zoom: 1 }}>
      <OrbitControls />
      <color attach="background" args={["lightgreen"]} />
      {/* <spotLight
        position={[100, 10, 10]}
        angle={2}
        penumbra={10}
        intensity={5}
        castShadow
      /> */}
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        {/* <House /> */}
        {/* <Home /> */}
        <Fuck />
      </Suspense>
    </Canvas>
  )
}
