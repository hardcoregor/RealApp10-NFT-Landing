import { raleway } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import exit from "../../assets/quest/exit.png";
import snap from "../../assets/quest/snap.png";
import logo from "../../assets/quest/logo.png";

const oneOne = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-100"></div>

      <div className="relative bg-oneOne bg-contain bg-no-repeat bg-[center_top_0px] h-screen">
        <div className="flex w-full justify-between pt-[50px] px-[50px]">
          <div className="flex">
            <div className="-mt-[50px]">
              <Image
                src={logo}
                alt="logo"
                height={130}
                className="cursor-pointer text-center"
                style={{ objectFit: "contain" }}
              />
            </div>
            <a
              href="https://twitter.com/PickleAdvNFT"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-center"
            >
              <Image
                src={snap}
                alt="exit"
                height={44}
                style={{ objectFit: "contain" }}
              />
            </a>
          </div>
          <Link href="/">
            <div className="cursor-pointer text-center">
              <Image
                src={exit}
                alt="exit"
                height={44}
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
        </div>

        <div className="flex w-full justify-center pt-[50%] sm:pt-[30%] md:pt-[20%] lg:pt-[10%] xl:pt-[15%]">
          <h3
            className={`text-white ${raleway.className} font-medium text-[30px] md:text-[45px] lg:text-[50px] leading-tight w-1/2 md:w-[90%] lg:w-[80%] xl:w-[50%] text-center select-none glowBtn`}
          >
            You are in a dirty alley in a dumpster
          </h3>
        </div>

        <div className="flex flex-col xl:flex-row xl:flex-wrap w-full text-center text-white justify-center mt-[10%] xl:mt-[5%] xl:px-[0px]">
          <Link href="/1.1/2.1">
            <p className="text-5xl cursor-pointer select-none glow">
              NEXT &gt;
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default oneOne;
