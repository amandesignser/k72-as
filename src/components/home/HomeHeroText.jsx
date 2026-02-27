import React from "react";
import Video from "./Video";
const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 uppercase">
      <div className="text-[9.5vw] text-center leading-[8vw] flex items-center justify-center selection:bg-[#D2FD50] selection:text-black">
        The spark for
      </div>
      <div className="text-[9.5vw] text-center leading-[8vw] flex items-center justify-center selection:bg-[#D2FD50] selection:text-black">
        all
        <div className="h-[7vw] w-[16vw] -mt-6 rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9.5vw] text-center leading-[8vw] flex items-center justify-center selection:bg-[#D2FD50] selection:text-black">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
