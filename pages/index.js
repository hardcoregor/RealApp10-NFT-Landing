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
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Home() {
  return (
      <div className="bg-mdwhole 2xl:bg-whole bg-no-repeat lg:bg-cover md:bg-[center_top_0px] bg-[center_top_-80px]">
        <div className="w-full h-[75px] fixed z-50">
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
