import { raleway } from "@/utils/fonts";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import exit from "../../assets/quest/exit.png";
import snap from "../../assets/quest/snap.png";
import logo from "../../assets/quest/logo.png";

import html2canvas from "html2canvas";

const threeFour = () => {
  const handleOpen = (link) => {
    window.open(link);
  };

  const captureAndTweet = async () => {
    const tweetText = encodeURIComponent("Share my quest walkthrough. Pickle quests avaliable now: @PickleAdvNFT");
    handleOpen(`https://twitter.com/intent/tweet?text=${tweetText}`);
  };
  return (
    <div className="relative" id="html">
      <div className="absolute inset-0 bg-black opacity-100"></div>
      <div className="relative bg-threeSix bg-contain bg-no-repeat bg-[center_top_0px] h-screen">
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
            <div onClick={captureAndTweet} className="cursor-pointer">
              <Image
                src={snap}
                alt="exit"
                height={44}
                style={{ objectFit: "contain" }}
              />
            </div>
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
            className={`text-white ${raleway.className} font-medium text-[30px] md:text-[45px] lg:text-[60px] leading-tight w-1/2 md:w-[90%] lg:w-[80%] xl:w-[50%] text-center select-none glowBtn`}
          >
            A huge rat pounces on you and throws you out of a garbage can
          </h3>
        </div>

        <div className="flex flex-col xl:flex-row xl:flex-wrap w-full text-center text-white justify-center mt-[10%] xl:mt-[5%] xl:px-[0px]">
          <Link href="/1.1/2.3">
            <p className="text-5xl cursor-pointer glow">NEXT &gt;</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default threeFour;
