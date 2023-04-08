import { raleway } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import exit from "../../assets/quest/exit.png";
import snap from "../../assets/quest/snap.png";
import logo from "../../assets/quest/logo.png";

const threeFour = () => {
  const handleOpen = (link) => {
    window.open(link);
  };

  const captureAndTweet = async () => {
    const tweetText = encodeURIComponent(
      "Share my quest walkthrough. Pickle quests avaliable now: @PickleAdvNFT"
    );
    handleOpen(`https://twitter.com/intent/tweet?text=${tweetText}`);
  };
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-100"></div>
      <div className="relative bg-threeFour bg-cover lg:bg-contain bg-no-repeat bg-[center_top_0px] w-screen h-screen">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="flex w-full justify-between xs:pt-[30px] xs:px-[30px md:pt-[50px] md:px-[50px] relative">
          <div className="flex">
            <div className="-mt-[50px]">
              <Image
                src={logo}
                alt="logo"
                height={130}
                className="text-center"
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
        <div className="flex w-full justify-center pt-[40%] sm:pt-[30%] md:pt-[20%] lg:pt-[10%] xl:pt-[10%] relative">
          <h3
            className={`text-white ${raleway.className} font-medium text-[30px] xs:w-full md:text-[45px] lg:text-[60px] leading-tight w-1/2 md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[50%] text-center select-none`}
          >
            A huge rat pounces on you and throws you out of a garbage can
          </h3>
        </div>

        <div className="flex flex-col xl:flex-row xl:flex-wrap w-full text-center text-white justify-center mt-[10%] xl:mt-[5%] xl:px-[0px] select-none relative">
          <Link href="/1.1/2.3">
            <p className="text-5xl cursor-pointer glow">NEXT &gt;</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default threeFour;
