import React from "react";

const Video = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        src="/videos/k72-video.mp4"
        type="video/mp4"
      ></video>
    </div>
  );
};

export default Video;
