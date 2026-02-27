import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stair = (props) => {
  const currentPath = useLocation().pathname;
  const stairParenRef = useRef(null);
  const pageRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairParenRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(stairParenRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    });
  }, [currentPath]);

  return (
    <div className="w-full min-h-screen">
      <div ref={stairParenRef} className="fixed inset-0 w-full h-screen z-20 hidden">
        <div className="h-full w-full flex">
          <div className="stair h-screen w-1/5 bg-black"></div>
          <div className="stair h-screen w-1/5 bg-black"></div>
          <div className="stair h-screen w-1/5 bg-black"></div>
          <div className="stair h-screen w-1/5 bg-black"></div>
          <div className="stair h-screen w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef} className="w-full min-h-screen overflow-hidden">
        {props.children}
      </div>
    </div>
  );
};

export default Stair;
