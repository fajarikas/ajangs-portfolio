import { useEffect, useRef } from "react";
import ProfileImage from "../../../public/assets/images/profile.png";
import RightArrowButton from "../Button/RightArrowButton";
import FollowMe from "../FollowMe/FollowMe";
import Typed from "typed.js";
import { Fade } from "react-awesome-reveal";

const HomeHero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Fullstack", "Frontend", "Backend"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-screen relative">
      <Fade cascade={true}>
        <div className="min-h-screen md:h-screen block md:flex items-center space-x-16 md:pt-0 pt-28 w-full mx-auto">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-9/12 mx-auto md:mx-0 md:w-1/3 border-4 border-green rounded-2xl p-1"
          />
          <div className="w-9/12 md:w-3/4 md:mt-0 mt-5">
            <p className="text-green text-lg text-left">Hello 👋 I am</p>
            <p className="font-semibold text-4xl md:text-7xl text-white">
              Fajar Ika<span className="text-green"> Saputra</span>,
            </p>
            <p className="text-white font-semibold mt-5 text-2xl md:text-4xl">
              I am a <span ref={el} className="text-green"></span>
              <span className="text-white"> Developer</span>
            </p>
            <p className="text-white text-justify md:text-left md:w-full mt-5 md:mt-24 font-light text-sm md:text-base">
              Within this portfolio, you'll find a curated collection of my best
              work, including web development, design, and branding projects.
            </p>

            <div className="mt-5 md:mt-10">
              <RightArrowButton url="/portfolio" text="View Portfolio" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 ">
          <FollowMe />
        </div>
      </Fade>
    </div>
  );
};

export default HomeHero;
