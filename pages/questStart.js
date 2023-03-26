import { raleway } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import first from "../assets/quest/1.png";

const questStart = () => {
  return (
    <div className="bg-start bg-cover bg-no-repeat bg-[center_top_0px] w-screen h-screen">
      <div className="flex w-full justify-center pt-[50%] sm:pt-[20%]">
        <h3
          className={`text-white ${raleway.className} font-bold text-[30px] md:text-[45px] lg:text-[60px] leading-tight w-1/2 text-center`}
        >
          Choose your location
        </h3>
      </div>

      <div className="flex flex-col w-full text-center text-white justify-center mt-[10%]">
        <div className="mt-[10%] w-full justify-center flex">
          <Link href="/">
            <div className="cursor-pointer text-center relative">
              <Image
                src={first}
                alt="exit"
                height={44}
                style={{ objectFit: "contain" }}
              />
              <p className="absolute top-0 flex justify-center w-full mt-[2%]">Hello</p>
            </div>
          </Link>
        </div>
        <div className="mt-[10%] w-full justify-center flex">2</div>
        <div className="mt-[10%] w-full justify-center flex">3</div>
      </div>
    </div>
  );
};

export default questStart;
