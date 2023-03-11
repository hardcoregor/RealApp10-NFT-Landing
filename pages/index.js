import Prologue from "@/components/Prologue";
import Header from "../components/Header";

import shmat from "../assets/shmat1.png";
import shmat2 from "../assets/shmat2.png";
import shmat3 from "../assets/shmat3.png";
import Image from "next/image";
import Main from "@/components/Main";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div className="">
      <div className="absolute w-full h-[75px] z-10">
        <Header />
      </div>
      <div className="">
        <Prologue />
      </div>
      <div className="w-full absolute top-[500px] z-10 object-fill">
        <Image src={shmat} alt="prolog" className="w-full h-[700px]" />
      </div>
      <Main />
      <div className="w-full absolute top-[1800px] z-10 object-fill">
        <Image src={shmat2} alt="prolog" className="w-full h-[395px]" />
      </div>
      <Cards />
      <div className="w-full absolute top-[2750px] z-10 object-fill">
        <Image src={shmat3} alt="prolog" className="w-full h-[590px]" />
      </div>
    </div>
  );
}
