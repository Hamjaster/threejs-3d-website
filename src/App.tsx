import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Robot";
import {
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
} from "@react-three/drei";
import AppleWebsite from "./pages/AppleWebsite";

function App() {
  return (
    <>
      <div className="h-screen w-screen">
        <Canvas className="h-full w-full">
          <OrbitControls enableZoom={false} />
          <PerspectiveCamera makeDefault position={[0, 15, 40]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <ScrollControls infinite={true} pages={20} damping={0.25}>
            <Model position={[0, -5, 0]} />
          </ScrollControls>
        </Canvas>
      </div>
      {/* Apple Website starts now */}
      {/* <AppleWebsite /> */}
    </>
  );
}

export default App;
