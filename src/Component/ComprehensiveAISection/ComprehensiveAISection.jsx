import AISolutionTab from "./AISolutionTab";
import BGIMG from "/assets/Images/BGgradient.png";
const ComprehensiveAISection = () => {
  return (
    <div className=" h-screen">
      <div className=" relative flex flex-col items-center">
        <img src={BGIMG} />

        <div className=" absolute top-0 flex  flex-col items-center">
          <h1 className=" font-poppins text-[40px] font-bold text-charcoalBlack mt-16">
            Comprehensive AI Solutions
          </h1>

          <div className=" mt-10">
            <AISolutionTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveAISection;
