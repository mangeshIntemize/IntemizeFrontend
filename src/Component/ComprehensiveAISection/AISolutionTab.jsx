import { useState } from "react";
import SolutionCard from "./SolutionCard";

const AISolutionTab = () => {
  const [Tab, seTab] = useState("Commercial Intelligence");

  const tabTitle = [
    "Commercial Intelligence",
    "Regulatory Compliance",
    "Scientific Liaison",
    "Pricing Research",
  ];

  return (
    <div className="bg-[#F7F7F7] max-w-[964px] rounded-[10px] shadow border">
      <div className=" flex justify-between">
        {tabTitle.map((title) => (
          <>
            <div className=" px-5 py-4">
              <p className=" font-poppins text-base text-charcoalBlack font-semibold">
                {title}
              </p>
            </div>
          </>
        ))}
      </div>

      {Tab === "Commercial Intelligence" && <SolutionCard />}
    </div>
  );
};

export default AISolutionTab;
