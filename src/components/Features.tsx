import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import StudioLights from "./StudioLights";
import { features, featureSequence } from "../constant";
import { Suspense, useEffect, useRef } from "react";
import { useProduct } from "../context/ProductContext";
import Macbook from "../models/Macbook.jsx";
import { Html } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ModelScroll = () => {
  const groupRef = useRef<any>(null);
  gsap.registerPlugin(ScrollTrigger);
  const { setTexture } = useProduct();
  // pre-loading all the images
  useEffect(() => {
    featureSequence.forEach(({ videoPath }) => {
      const v = document.createElement("video");
      Object.assign(v, {
        src: videoPath,
        muted: true,
        playsInline: true,
        loop: true,
        preload: "auto",
        style: {
          display: "none",
        },
      });
      v.load();
      console.log("All videos loaded sarr!");
    });
  }, []);

  useGSAP(() => {
    // 3Dmodel animation
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top 38%",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    // sync the features text boxes with the model animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top 40%",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    // 3D spin
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power2.inOut",
      });
    }

    // content visibility
    timeline
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box1", {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box2", {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box3", {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box4", {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box5", {
        opacity: 1,
        y: 0,
      });
  }, []);

  return (
    <>
      <group ref={groupRef}>
        <Suspense fallback={<Html>Loading...</Html>}>
          <Macbook position={[0, -10, 0]} />
        </Suspense>
      </group>
    </>
  );
};

export default function Features() {
  return (
    <section id="features" className="relative ">
      <h2 className="text-4xl text-white font-bold">
        See it all in a new light.
      </h2>

      <div className="relative w-full h-[500px]">
        <Canvas id="f-canvas" camera={{ position: [0, 12, 50] }}>
          <StudioLights />
          <ambientLight intensity={0.5} />

          <ModelScroll />
        </Canvas>

        {/* Overlay text boxes */}
        <div className="absolute inset-0 text-white">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={clsx("box  ", `box${index + 1}`, feature.styles)}
            >
              <img src={feature.icon} alt={feature.highlight} />
              <p>
                <span className="text-white">{feature.highlight}</span>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
