import { FaArrowDownLong } from "react-icons/fa6";
import { LuMouse } from "react-icons/lu";
import { NavBar } from "../NavBar";

const HeroSection = () => {
  return (
    <>
      <NavBar />
      <div className="bg-black  h-screen  flex justify-center items-center">
        <div className="flex gap-10 flex-col  items-center">
          <div className="">
            <h1 className="text-white font-poppins font-bold text-[66px] text-center leading-[83px]">
              Transforming Pharmaceutical Intelligence with AI Agents
            </h1>
            <p className="text-white font-sourceSans font-normal text-xl text-center mt-2">
              Revolutionizing commercial strategy, regulatory compliance, and
              scientific liaison <br />
              with intelligent AI solutions
            </p>
          </div>

          <div className="flex gap-[10px]">
            <button className=" px-[19px] py-[11px] bg-white rounded-full font-sourceSans text-deep-blue text-[15px] font-bold cursor-pointer">
              Get Started
            </button>
            <button className=" px-[19px] py-[11px] rounded-full font-sourceSans text-white  border-white border-2 text-[15px] font-bold cursor-pointer">
              Learn More
            </button>
          </div>

          <div className=" flex  flex-col items-center">
            <LuMouse className="text-white h-12 w-7" />
            <p className="text-white font-poppins text-lg font-semibold">
              Scroll down
            </p>
            <FaArrowDownLong className="text-white h-6 w-7 mt-2 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
