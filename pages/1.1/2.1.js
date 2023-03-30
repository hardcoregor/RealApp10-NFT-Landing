import { raleway } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import first from "../../assets/quest/1.png";
import second from "../../assets/quest/2.png";
import third from "../../assets/quest/3.png";

import exit from "../../assets/quest/exit.png";
import snap from "../../assets/quest/snap.png";
import logo from "../../assets/quest/logo.png";

const twoOne = () => {
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
      <div className="relative bg-twoOne md:bg-cover xl:bg-contain bg-no-repeat bg-[center_top_0px] w-screen h-screen">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="flex w-full justify-between pt-[50px] px-[50px] relative">
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

        <div className="flex w-full justify-center pt-[50%] sm:pt-[15%] md:pt-[20%] lg:pt-[10%] xl:pt-[10%] relative">
          <h3
            className={`text-white ${raleway.className} font-medium text-[25px] sm:w-[90%] md:text-[30px] lg:text-[50px] leading-tight w-1/2 md:w-[90%] xl:w-[70%] 2xl:text-[40px] 2xl:w-[50%] text-center`}
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
