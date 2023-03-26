import { raleway } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const threeFour = () => {
  return (
    <div className="bg-fiveOne bg-cover bg-no-repeat bg-[center_top_0px] w-screen h-screen">
      <div className="flex w-full justify-center pt-[50%] sm:pt-[30%] md:pt-[20%] lg:pt-[10%] xl:pt-[15%]">
        <h3
          className={`text-white ${raleway.className} font-medium text-[30px] md:text-[45px] lg:text-[60px] leading-tight w-1/2 md:w-[90%] text-center`}
        >
          A huge rat pounces on you and throws you out of a garbage can
        </h3>
      </div>

      <div className="flex flex-col xl:flex-row xl:flex-wrap w-full text-center text-white justify-center mt-[10%] xl:mt-[5%] xl:px-[0px]">
        <Link href="/1.1/2.1">
          <p className="text-5xl cursor-pointer">NEXT &gt;</p>
        </Link>
      </div>
    </div>
  );
};

export default threeFour;
