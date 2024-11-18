import RocketSVG from "/assets/SVG/rocket.svg";
import MedTechIMG from "/assets/Images/MedTech.jpg";

const AboutUs = () => {
  return (
    <div className=" h-screen flex items-center container mx-auto">
      <div className="flex  w-full gap-6 ">
        {/* Image Section */}
        <div className="w-[50%]">
          <div className=" relative bg-azureBlue h-[489px] w-[348px] rounded-md">
            <div className=" absolute  left-[34px] top-[34px] border-white border-[10px] rounded-[10px] w-[567px] h-[501px]">
              <img
                src={MedTechIMG}
                alt="image"
                className=" w-full  h-full object-cover"
              />

              <div className=" bg-white w-[264px] h-[100px] absolute   bottom-0 right-0 flex justify-center items-center">
                <p className=" font-semibold text-2xl text-charcoalBlack font-poppins">
                  10 + Year <br /> Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className=" flex flex-col gap-8   w-[50%]">
          <h1 className=" font-poppins text-[40px] font-bold text-charcoalBlack mt-8">
            About Us
          </h1>
          <p className=" text-slateGray font-normal text-base font-sourceSans">
            At Intemize, we are committed to transforming the pharmaceutical and
            healthcare landscape with cutting-edge AI-driven solutions. With
            over 10 years of experience, our expertise lies in equipping
            businesses with the tools they need to excel in a competitive and
            ever-evolving industry. We prioritize innovation, precision, and
            results, driving impactful change for our clients.
          </p>

          <div className=" flex gap-8 flex-col">
            <div className="flex gap-[18px]">
              <img src={RocketSVG} alt="img" className=" w-[20px] h-[21px]" />
              <div className="flex gap-3 flex-col">
                <h2 className=" font-poppins font-semibold text-xl text-charcoalBlack">
                  Innovating Pharma, Powering Progress
                </h2>
                <p className=" text-slateGray font-normal text-base font-sourceSans">
                  We fuse advanced AI with deep industry expertise to redefine
                  pharmaceutical intelligence and deliver unparalleled business
                  growth.
                </p>
              </div>
            </div>

            <div className="flex gap-[18px]">
              <img src={RocketSVG} alt="img" className=" w-[20px] h-[21px]" />
              <div className="flex gap-3 flex-col">
                <h2 className=" font-poppins font-semibold text-xl text-charcoalBlack">
                  Shaping the Future with You
                </h2>
                <p className=" text-slateGray font-normal text-base font-sourceSans">
                  Partner with us to unlock transformative solutions that
                  empower smarter decisions and revolutionize healthcare
                  outcomes.
                </p>
              </div>
            </div>
          </div>

          <div>
            <button className="px-5 py-3 bg-royalBlue rounded-full font-sourceSans text-sm text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
