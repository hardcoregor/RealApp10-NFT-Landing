import Prologue from "@/components/Prologue";
import Header from "../components/Header";

import shmat from "../assets/shmat1.png";
import shmat2 from "../assets/shmat2.png";
import shmat3 from "../assets/shmat3.png";
import shmat4 from "../assets/shmat4.png";
import Image from "next/image";
import Main from "@/components/Main";
import Cards from "@/components/Cards";
import Pickle from "@/components/Pickle";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="lg:bg-whole md:bg-mdwhole bg-no-repeat bg-auto bg-[center_top_0px]">
      <div className="w-full h-[75px] fixed z-20">
        <Header />
      </div>
      <div className="">
        <Prologue />
      </div>
      <div id="background">
        <Main />
      </div>
      <div id="collection">
        <Cards />
      </div>
      <div id="project">
      <Pickle />
      </div>
      <Footer />
    </div>
  );
}
