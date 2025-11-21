import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Macbook14 from "../models/Macbook-14.jsx";
import Macbook16 from "../models/Macbook-16.jsx";

const ProductView = () => {
  const [selectedColor, setSelectedColor] = useState<"silver" | "spaceBlack">(
    "silver"
  );
  const [selectedSize, setSelectedSize] = useState<"14" | "16">("16");

  // Placeholder 3D component - will be replaced with actual model later
  const LaptopModel = (props: any) => {
    return selectedSize === "14" ? (
      <Macbook14 {...props} />
    ) : (
      <Macbook16 {...props} />
    );
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Top left text */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
        <p className="text-sm md:text-base font-light">Take a closer look.</p>
      </div>

      {/* Main content container */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 md:py-24">
        {/* 3D Model Container */}
        <div className="w-full max-w-4xl h-[400px]  mb-8 md:mb-12">
          <Canvas
            camera={{ position: [0, 0, 15], fov: 50 }}
            className="w-full h-full"
          >
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={1}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2.2}
            />
            <PerspectiveCamera makeDefault position={[0, 0, 45]} />
            <LaptopModel position={[0, -10, 0]} />
          </Canvas>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-4xl">
          {/* Product Title */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight">
              MacBook Pro {selectedSize}"
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2">
              in {selectedColor === "silver" ? "Silver" : "Space Black"}
            </p>
          </div>

          {/* Color Options */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSelectedColor("silver")}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 transition-all ${
                selectedColor === "silver"
                  ? "border-white scale-110"
                  : "border-gray-600 hover:border-gray-400"
              }`}
              aria-label="Silver color"
            >
              <div className="w-full h-full rounded-full bg-gray-300" />
            </button>
            <button
              onClick={() => setSelectedColor("spaceBlack")}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 transition-all ${
                selectedColor === "spaceBlack"
                  ? "border-white scale-110"
                  : "border-gray-600 hover:border-gray-400"
              }`}
              aria-label="Space Black color"
            >
              <div className="w-full h-full rounded-full bg-black" />
            </button>
          </div>

          {/* Size Options */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedSize("14")}
              className={`px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-light border transition-all ${
                selectedSize === "14"
                  ? "border-white bg-white/10"
                  : "border-gray-600 hover:border-gray-400"
              }`}
            >
              14"
            </button>
            <button
              onClick={() => setSelectedSize("16")}
              className={`px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-light border transition-all ${
                selectedSize === "16"
                  ? "border-white bg-white/10"
                  : "border-gray-600 hover:border-gray-400"
              }`}
            >
              16"
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
