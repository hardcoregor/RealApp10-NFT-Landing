import { raleway } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import exit from "../assets/quest/exit.png";
import first from "../assets/quest/1.png";
import two from "../assets/quest/2.png";
import three from "../assets/quest/3.png";

const questStart = () => {
  const [second, setSecond] = useState("2. Sewerage");
  const [third, setThird] = useState("3. Busy street");

  const changeSecond = (text) => {
    setSecond("Coming soon...");
  };

  const changeThird = (text) => {
    setThird("Coming soon...");
  };

  return (
    <div className="bg-start bg-cover bg-no-repeat bg-[center_top_0px] w-screen h-screen">
      <div className="flex w-full justify-end pt-[50px] pr-[50px]">
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
      <div className="flex w-full justify-center pt-[47%] xs:pt-[10%] sm:pt-[27%] md:pt-[20%] lg:pt-[17%] xl:pt-[12%]">
        <h3
          className={`text-white ${raleway.className} font-medium text-[30px] md:text-[45px] lg:text-[60px] leading-tight w-1/2 text-center`}
        >
          Choose your location
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row w-full text-center text-white justify-center mt-[10%] xl:mt-0 2xl:px-[150px]">
        <div className="mt-[10%] w-full justify-center flex">
          <Link href="/1.1/1.1">
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
                  height={65}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p
                className={`${raleway.className} font-medium absolute top-0 flex justify-center w-full mt-[2%] text-2xl xl:mt-[3%] xl:text-3xl glow`}
              >
                1. Trash can in the backyard
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-[10%] w-full justify-center flex">
          <div className="cursor-pointer text-center relative">
            <div className="flex xl:hidden">
              <Image
                src={two}
                alt="exit"
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="hidden xl:flex">
              <Image
                src={two}
                alt="exit"
                height={65}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p
              onClick={() => changeSecond("Coming soon..")}
              className={`${raleway.className} font-medium absolute top-0 flex justify-center w-full mt-[2%] text-2xl xl:mt-[3%] xl:text-3xl glow`}
            >
              {second}
            </p>
          </div>
        </div>
        <div className="mt-[10%] w-full justify-center flex">
          <div className="cursor-pointer text-center relative">
            <div className="flex xl:hidden">
              <Image
                src={three}
                alt="exit"
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="hidden xl:flex">
              <Image
                src={three}
                alt="exit"
                height={65}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p
              onClick={() => changeThird("Coming soon..")}
              className={`${raleway.className} font-medium absolute top-0 flex justify-center w-full mt-[2%] text-2xl xl:mt-[3%] xl:text-3xl glow`}
            >
              {third}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default questStart;
