import { Fade, Slide } from "react-awesome-reveal";
import TextLeft from "../Header/TextLeft";

const AboutMe = ({ title, content }) => {
  return (
    <div className="">
      <Slide direction="right">
        <TextLeft title="About Me" />
      </Slide>
      <Fade cascade={true}>
        <p className="font-semibold text-3xl md:text-5xl mt-3 text-black dark:text-white">
          {title}
        </p>
        <p className="text-black dark:text-white text-left text-md font-regular mt-7">
          {content}
        </p>
      </Fade>
    </div>
  );
};

export default AboutMe;
