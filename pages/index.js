import Prologue from "@/components/Prologue";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <div className="absolute w-full h-[75px] z-10">
        <Header />
      </div>
      <div className="">
        <Prologue />
      </div>
      {/* <Prologue /> */}
    </div>
  );
}
