import React from "react";
// import MapImage from '../assets/map.svg';
import MapLeft from "../assets/left.svg";
import Svg from "./Svg";
function Map() {
  return (
    <div name="map" className="w-screen relative">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-giz text-red-700 text-start mx-10 md:mx-20">
          GIZ Tanzania & EAC Map
        </h1>
        <div className="flex justify-center mx-10 ">
          <Svg className="w-full object-fit md:mt-10"/>
        </div>
      </div>
      <div className="absolute bottom-20 md:bottom-10 ">
        <img
          src={MapLeft}
          alt="my profile"
          className=" w-1/2  md:w-[60%] mx-10 md:mx-20"
        />
      </div>
      <div class="border  border-[#C07029] mx-10 md:mt-20 md:mx-20"></div>
    </div>
  );
}

export default Map;
