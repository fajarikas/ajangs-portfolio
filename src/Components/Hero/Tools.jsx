import { useState } from "react";
import { tools } from "../../Dummy/tools";
import TextRight from "../Header/TextRight";
import { Fade } from "react-awesome-reveal";

const Tools = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Fade cascade={true}>
        <TextRight title=" My Tools" />
        <div className="mt-7 grid grid-cols-4 mx-auto w-full gap-y-5 md:gap-y-14">
          {tools.map((data, index) => {
            const Icon = data.icon;
            return (
              <Fade cascade={true}>
                <div
                  key={index}
                  className="block items-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Icon
                    className={`flex justify-center mx-auto w-10 h-10 md:w-20 md:h-20 m-2 text-${
                      hoveredIndex === index ? "green" : "white"
                    } text-4xl cursor-pointer transition-colors duration-300 delay-50 hover:text-green`}
                  />
                  <p
                    className={`text-green text-center transition-opacity duration-300 delay-50 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {data.name}
                  </p>
                </div>
              </Fade>
            );
          })}
        </div>
      </Fade>
    </>
  );
};

export default Tools;
