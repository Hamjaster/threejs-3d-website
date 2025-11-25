"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { performanceImages, performanceImgPositions } from "../constant";

const Performance = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });

    performanceImages.forEach(({ id }) => {
      const position = performanceImgPositions.find((pos) => pos.id === id)!;
      console.log(position, "position");
      timeline.to(`.${id}`, {
        left: `${position.left}%`,
        bottom: `${position.bottom}%`,
        right: `${position.right}%`,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });
    });
  }, []);

  // useGSAP(() => {
  //   if (!containerRef.current) return;

  //   performanceImages.forEach(({ id }) => {
  //     gsap.set(`#${id}`, {
  //       opacity: 0,
  //       scale: 0.8,
  //     });
  //   });

  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top 80%",
  //       end: "bottom 20%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });

  //   performanceImages.forEach(({ id }, index) => {
  //     timeline.to(
  //       `#${id}`,
  //       {
  //         opacity: 1,
  //         scale: 1,
  //         duration: 0.8,
  //         ease: "back.out",
  //       },
  //       index * 0.1
  //     );
  //   });
  // }, []);

  return (
    <section id="performance" ref={sectionRef} className="mt-96">
      <h2 className="text-7xl text-white mb-20">
        Next-level graphics performance. Game on.
      </h2>

      <div
        ref={containerRef}
        className="wrapper relative w-full h-screen max-h-screen overflow-hidden bg-black rounded-lg"
      >
        {performanceImages.map(({ id, src }) => {
          return (
            <img key={id} className={id} src={src || "/placeholder.svg"} />
          );
        })}
      </div>

      <div className="content mt-12">
        <p className="text-xl text-gray-300">
          Run graphics-intensive workflows with a responsiveness that{" "}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          improve performance.
        </p>
      </div>
    </section>
  );
};

export default Performance;
