import { raleway } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import first from "../../assets/quest/1.png";
import second from "../../assets/quest/2.png";
import third from "../../assets/quest/3.png";

const twoOne = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-100"></div>
      <div className="relative bg-twoOne md:bg-cover xl:bg-contain bg-no-repeat bg-[center_top_0px] w-screen h-screen">
        <div className="flex w-full justify-center pt-[50%] sm:pt-[15%] md:pt-[20%] lg:pt-[10%] xl:pt-[15%]">
          <h3
            className={`text-white ${raleway.className} font-medium text-[30px] sm:w-[90%] md:text-[45px] lg:text-[60px] leading-tight w-1/2 md:w-[90%] xl:w-[70%] 2xl:text-[50px] 2xl:w-[50%] text-center`}
          >
            You find yourself in a trash can and you hear something moving in
            the trash
          </h3>
        </div>

        <div className="relative flex flex-col xl:flex-row xl:flex-wrap w-full text-center text-white justify-center mt-0 lg:mt-0 xl:mt-[5%] xl:px-[0px]">
          <div className="mt-[10%] w-full xl:mt-[2%] xl:w-[45%] xl:mr-[2%] xl:justify-end justify-center flex">
            <div className="cursor-pointer text-center relative">
              <div className="flex xl:hidden">
                <Image
                  src={first}
                  alt="exit"
                  height={60}
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
              <Link href="/1.1/3.4">
                <p
                  className={`absolute ${raleway.className} top-0 flex justify-center w-full mt-[2%] text-2xl xl:mt-[3%] xl:text-2xl glowBtn select-none`}
                >
                  <span className="font-black">
                    A)
                    <span className="font-medium w-full ml-4">
                      Come over and take a look
                    </span>
                  </span>
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-[10%] w-full xl:mt-[2%] xl:w-[45%] xl:ml-[2%] xl:justify-start justify-center flex">
            <div className="cursor-pointer text-center relative">
              <div className="flex xl:hidden">
                <Image
                  src={second}
                  alt="exit"
                  height={60}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="hidden xl:flex">
                <Image
                  src={second}
                  alt="exit"
                  height={62}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <Link href="/1.1/3.5">
                <p
                  className={`absolute ${raleway.className} top-0 flex justify-center w-full mt-[2%] text-2xl xl:mt-[3%] xl:text-2xl glowBtn select-none`}
                >
                  <span className="font-black">
                    B)
                    <span className="font-medium w-full ml-4">Run away</span>
                  </span>
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-[10%] w-full xl:mt-[2%] xl:w-[45%] xl:justify-center justify-center flex">
            <div className="cursor-pointer text-center relative">
              <div className="flex xl:hidden">
                <Image
                  src={third}
                  alt="exit"
                  height={60}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="hidden xl:flex">
                <Image
                  src={third}
                  alt="exit"
                  height={62}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <Link href="/1.1/3.6">
                <p
                  className={`absolute ${raleway.className} top-0 flex justify-center w-full mt-[2%] text-2xl xl:mt-[3%] xl:text-2xl glowBtn select-none`}
                >
                  <span className="font-black">
                    C)
                    <span className="font-medium w-full ml-4">
                      Find weapons in the trash
                    </span>
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default twoOne;
