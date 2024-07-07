import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import House from "./models/House"
// import Home from "./models/Untitled"
// import Fuck from "./models/Fuck"
// import Copy from "./models/Copy"
import Example from "./models/Example"

export default function App() {
  const [modal, setModal] = useState(true)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <div className="fucker" style={{ opacity: modal ? "0" : "1" }}>
              <p>dsadsaad</p>
              <p>dsadsaad</p>
              <p>dsadsaad</p>
              <p>dsadsaad</p>
            </div>
            <Canvas camera={{ position: [5, -10, 50], zoom: 1 }}>
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
        } />
        <Route path="/:id" element={
          <div>
            hello boss
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}
