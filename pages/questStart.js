import { raleway } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import first from "../assets/quest/1.png";
import second from "../assets/quest/2.png";
import third from "../assets/quest/3.png";

const questStart = () => {
  return (
    <div className="bg-start bg-cover bg-no-repeat bg-[center_top_0px] w-screen h-screen">
      <div className="flex w-full justify-center pt-[50%] sm:pt-[30%] lg:pt-[20%] xl:pt-[15%]">
        <h3
          className={`text-white ${raleway.className} font-bold text-[30px] md:text-[45px] lg:text-[60px] leading-tight w-1/2 text-center`}
        >
          Choose your location
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row w-full text-center text-white justify-center mt-[10%] xl:mt-0">
        <div className="mt-[10%] w-full justify-center flex">
          <Link href="/">
            <div className="cursor-pointer text-center relative">
              <div className="flex xl:hidden">
                <Image
                  src={first}
                  alt="exit"
                  height={44}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="hidden xl:flex">
                <Image
                  src={first}
                  alt="exit"
                  height={62}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="absolute top-0 flex justify-center w-full mt-[2%] text-2xl xl:mt-[3%] xl:text-4xl glow">
                1. Trash can in the backyard
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-[10%] w-full justify-center flex">
          <Link href="/">
            <div className="cursor-pointer text-center relative">
              <div className="flex xl:hidden">
                <Image
                  src={first}
                  alt="exit"
                  height={44}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="hidden xl:flex">
                <Image
                  src={first}
                  alt="exit"
                  height={62}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="absolute top-0 flex justify-center w-full mt-[2%] text-2xl xl:mt-[3%] xl:text-4xl glow">
                2. Sewerage
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-[10%] w-full justify-center flex">
          <Link href="/">
            <div className="cursor-pointer text-center relative">
              <div className="flex xl:hidden">
                <Image
                  src={first}
                  alt="exit"
                  height={44}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="hidden xl:flex">
                <Image
                  src={first}
                  alt="exit"
                  height={62}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="absolute top-0 flex justify-center w-full mt-[2%] text-2xl xl:mt-[3%] xl:text-4xl glow">
                3. Busy street
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default questStart;
