import { Fade } from "react-awesome-reveal";
import TextLeft from "../Header/TextLeft";

const AboutMe = ({ title, content }) => {
  return (
    <div>
      <Fade cascade={true}>
        <TextLeft title="About Me" />
        <p className="font-semibold text-3xl md:text-5xl mt-3 text-white">
          {title}
        </p>
        <p className="text-white text-left text-md font-regular mt-7">
          {content}
        </p>
      </Fade>
    </div>
  );
};

export default AboutMe;
