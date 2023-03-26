import { raleway } from "@/utils/fonts";
import React from "react";

const questStart = () => {
  return (
    <div className="bg-start bg-cover bg-no-repeat bg-[center_top_0px] w-screen h-screen">
      <div className="flex w-full justify-center pt-[50%]">
        <h3
          className={`text-white ${raleway.className} font-bold text-[30px] lg:text-[60px] leading-tight w-1/2 text-center`}
        >
          Choose your location
        </h3>
      </div>
    </div>
  );
};

export default questStart;
