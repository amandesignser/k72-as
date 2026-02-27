import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div className="">
      <div className="fixed h-full w-full">
        <Video />
      </div>
      <div className="h-screen w-full overflow-hidden relative flex flex-col justify-between px-10">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
