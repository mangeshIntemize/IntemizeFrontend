
const SolutionCard = () => {
  const data = [
    {
      title: "Market Analysis",
      images: "/assets/Images/ComprehenSiveAIIMG/discussion1.png",
      desc: "Real-time competitor tracking Market share analysis Trend prediction Sales forecasting",
    },
    {
      title: "Sales Optimization",
      images: "/assets/Images/ComprehenSiveAIIMG/discussion2.png",
      desc: "Territory mapping Customer segmentation Performance analytics Resource allocation",
    },
    {
      title: "Strategic Planning",
      images: "/assets/Images/ComprehenSiveAIIMG/discussion3.png",
      desc: "Portfolio optimization Launch strategy Market entry analysis Growth opportunity identification",
    },
  ];

  return (
    <div className=" bg-green-500">
      <div className="bg-white py-6 px-[54px] border ">
        <div className=" flex gap-8">
          {data.map((item) => {
            return (
              <>
                <div className="w-[266px]">
                  <div>
                    <img src={item?.images} alt="Img" className=" h-[169px]" />
                  </div>

                  <div>
                    <h1 className=" font-poppins text-[20px] font-bold text-charcoalBlack my-4">
                      {item?.title}
                    </h1>
                    <p className=" text-slateGray font-normal text-base font-sourceSans">
                      {item?.desc}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
