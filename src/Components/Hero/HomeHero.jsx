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
    <div className="h-screen ">
      <Fade cascade={true}>
        <div className="min-h-screen md:h-screen block md:flex items-center space-x-16 md:pt-24 pt-28 w-full mx-auto">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-9/12 mx-auto md:mx-0 md:w-1/3 border-4 border-green rounded-2xl p-1"
          />
          <div className="w-9/12 md:w-3/4 md:mt-0 mt-5">
            <p className="text-green text-lg text-left">Hello 👋 I am</p>
            <p className="font-semibold text-4xl md:text-7xl text-black dark:text-white">
              Fajar Ika<span className="text-green"> Saputra</span>,
            </p>
            <p className="text-black dark:text-white font-semibold mt-5 text-2xl md:text-4xl">
              I am a <span ref={el} className="text-green"></span>
              <span> Developer</span>
            </p>
            <p className="text-black dark:text-white text-justify md:text-left md:w-full mt-5 md:mt-10 font-light text-sm md:text-base">
              Thanks for visiting my portfolio. I specialize in web development,
              design, and branding. I create attractive and functional websites
              using front-end languages such as HTML, CSS, and JavaScript, as
              well as back-end frameworks like Node.js and Laravel.
              Additionally, I craft cohesive branding strategies for logos,
              marketing materials, and overall brand identity. With a keen eye
              for detail and dedication to exceptional results, I approach each
              project with creativity and precision. I'm committed to bringing
              your vision to life through collaboration on your next project.
              Thank you for exploring my work.
            </p>

            <div className="flex justify-between items-center mt-5 md:mt-10">
              <RightArrowButton url="/about" text="View More" />
              <FollowMe />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HomeHero;
