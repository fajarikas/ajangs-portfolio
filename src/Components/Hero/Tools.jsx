import { useState } from "react";
import { tools } from "../../Dummy/tools";
import TextRight from "../Header/TextRight";
import { Fade, Slide } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Tools = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Hitung jumlah slide yang akan ditampilkan
  const totalSlides = Math.ceil(tools.length / 4);

  return (
    <>
      <Slide cascade={true}>
        <TextRight title=" My Tools" />
      </Slide>

      <div className="mt-7">
        <Carousel
          animationHandler="slide"
          showArrows={true}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={false}
          dynamicHeight={false}
          width="100%"
          showStatus={totalSlides > 1}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const firstIndex = slideIndex * 4;
            const slideData = tools.slice(firstIndex, firstIndex + 4);
            return (
              <Fade cascade={true} key={slideIndex}>
                <div className="flex space-x-0 md:space-x-10 justify-center">
                  {slideData.map((slideItem, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col-reverse items-center"
                      onMouseEnter={() => setHoveredIndex(itemIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <slideItem.icon
                        className={`w-8 h-8 md:w-20 md:h-20 m-2 text-${
                          hoveredIndex === itemIndex ? "green" : "white"
                        } text-4xl cursor-pointer transition-colors duration-300 delay-50 hover:text-green`}
                      />
                      <p
                        className={`absolute z-10 top-8 text-xs  text-green text-center items-center transition-opacity duration-300 delay-50 ${
                          hoveredIndex === itemIndex
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        {slideItem.name}
                      </p>
                    </div>
                  ))}
                </div>
              </Fade>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Tools;
