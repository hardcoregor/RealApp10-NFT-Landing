import { raleway } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import exit from "../assets/quest/exit.png";
import logo from "../assets/quest/logo.png";

const quest = () => {
  return (
    <div className="bg-start bg-cover bg-no-repeat bg-[center_top_0px] w-screen h-screen">
      <div className="flex w-full justify-end pt-[30px] pr-[20px] md:pt-[50px] md:pr-[50px]">
        <Link href="/">
          <div className="cursor-pointer text-center mr-[20px]">
            <Image
              src={exit}
              alt="exit"
              height={44}
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
      </div>

      <div className="w-full flex justify-center mt-[0px]">
        <Link href="/questStart">
          <Image
            src={logo}
            alt="logo"
            height={410}
            className="cursor-pointer text-center"
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
      <div className="w-full flex justify-center">
        <p
          className={`text-white ${raleway.className} font-bold text-[30px] lg:text-[60px] leading-tight w-1/2 text-center xs:w-full`}
        >
          Don’t forget that your choice will affect the course of the plot
        </p>
      </div>
    </div>
  );
};

export default quest;
