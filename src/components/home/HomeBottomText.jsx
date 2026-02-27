import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-5">
      <div className="hover:border-[#D2FD50] hover:text-[#D2FD50] h-[6.5vw] flex items-center px-14 border-3 border-white rounded-full">
        <Link className="text-[6.5vw] mt-6" to="/work">
          WORK
        </Link>
      </div>
      <div className="hover:border-[#D2FD50] hover:text-[#D2FD50] h-[6.5vw] flex items-center px-14 border-3 border-white rounded-full">
        <Link className="text-[6.5vw] mt-6" to="/agence">
          AGENCY
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
