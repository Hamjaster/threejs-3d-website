import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

export default function Showcase() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const maskImgRef = useRef<HTMLImageElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!showcaseRef.current || !maskImgRef.current) return;

    // Set initial state - start from a smaller scale
    gsap.set(maskImgRef.current, {
      scale: 0.5, // or whatever initial scale you want
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: showcaseRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true, // Remove this in production
        pin: true,
      },
    });

    // Animate to scale(1) as you scroll
    timeline.to(maskImgRef.current, {
      scale: 1,
      duration: 1,
    });
  }, []);

  return (
    <div id="showcase" ref={showcaseRef}>
      <div className="media">
        <video src="/videos/game.mp4" muted loop playsInline />
        <div className="mask">
          <img ref={maskImgRef} src="/mask-logo.svg" alt="showcase" />
        </div>
      </div>
      <div className="text-3xl text-white font-bold">
        It comes with assasin creed support gaming
      </div>
    </div>
  );
}
