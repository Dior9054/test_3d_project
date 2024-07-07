import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Suspense } from "react";

// import House from "./models/House"
// import Home from "./models/Untitled"
// import Fuck from "./models/Fuck"
// import Copy from "./models/Copy"
import Example from "./models/Example"

export default function App() {
  const [modal, setModal] = useState(true)
  return (
    <>
      <div className="fucker" style={{ opacity: modal ? "0" : "1" }}>
        <p>dsadsaad</p>
        <p>dsadsaad</p>
        <p>dsadsaad</p>
        <p>dsadsaad</p>
      </div>
      <Canvas camera={{ position: [5, -10, 500], zoom: 1 }}>
        <OrbitControls />
        <color attach="background" args={["lightgreen"]} />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          {/* <House /> */}
          {/* <Home /> */}
          {/* <Fuck /> */}
          {/* <Copy /> */}
          <Example setModal={setModal} />
        </Suspense>
      </Canvas>
    </>
  )
}
