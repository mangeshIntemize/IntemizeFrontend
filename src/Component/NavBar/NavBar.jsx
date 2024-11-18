import LogoSVG from "/assets/SVG/logo.svg";
const NavBar = () => {
  const NavList = ["About", "Solutions", "Benefits", "Case Studies"];

  return (
    <div className="bg-black flex justify-between items-center pt-5">
      <div>
        <img src={LogoSVG} alt="logo" className="w-11 h-11" />
      </div>

      <div className="flex gap-[18px] items-center">
        <div className="flex gap-14">
          {NavList.map((item, index) => {
            return (
              <p
                key={index}
                className=" font-poppins text-white font-bold text-sm cursor-pointer"
              >
                {item}
              </p>
            );
          })}
        </div>
        <div>
          <button className=" bg-white py-[9px] px-[18px] rounded-full border text-deep-blue font-bold font-sourceSans text-sm">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
