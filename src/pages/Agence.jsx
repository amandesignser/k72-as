import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArry = [
    "../public/images/k72-project-image.jpg",
    "../public/images/k72-project-image-2.jpg",
    "../public/images/k72-project-image-3.jpg",
    "../public/images/k72-project-image-4.jpg",
    "../public/images/k72-project-image-5.jpg",
    "../public/images/k72-project-image-6.jpg",
    "../public/images/k72-project-image-7.jpg",
  ];
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 25%",
        end: "top -100%",
        markers: true,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArry.length);
          } else {
            imageIndex = imageArry.length - 1;
          }
          imageRef.current.src = imageArry[imageIndex];
        },
      },
    });
  });
  return (
    <div className="parent">
      <div id="page1" className="py-1">
        <div
          ref={imageDivRef}
          className="h-[20vw] rounded-[20px] w-[15vw] absolute top-96 left-[30.33vw]  overflow-hidden"
        >
          <img
            ref={imageRef}
            src="../public/images/k72-project-image.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="font-[font2] text-black relative">
          <div className="mt-[30vw] ">
            <h1 className="text-[20vw] text-center uppercase leading-[17.5vw] selection:bg-[#D2FD50]">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className="h-screen w-full bg-amber-500"></div>
    </div>
  );
};

export default Agence;
