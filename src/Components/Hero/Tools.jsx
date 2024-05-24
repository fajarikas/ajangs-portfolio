import React, { useState, useEffect } from "react";
import { tools } from "../../Dummy/tools";
import TextRight from "../Header/TextRight";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../assets/css/global.css"; // Make sure this is the correct path to your CSS file

const Tools = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Detect theme
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
    document.documentElement.classList.add(currentTheme);
  }, []);

  const totalSlides = Math.ceil(tools.length / 4);

  return (
    <>
      <Slide cascade={true}>
        <TextRight title="My Tools" />
      </Slide>

      <Slide direction="up">
        <div className="mt-7">
          <Carousel
            className="text-black dark:text-white"
            animationHandler="slide"
            showArrows={true}
            autoPlay={true}
            interval={2000}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
            dynamicHeight={false}
            width="100%"
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="carousel-arrow carousel-arrow-left text-black dark:text-white"
                >
                  &#10094;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="carousel-arrow carousel-arrow-right text-black dark:text-white"
                >
                  &#10095;
                </button>
              )
            }
            showStatus={totalSlides > 1}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const firstIndex = slideIndex * 4;
              const slideData = tools.slice(firstIndex, firstIndex + 4);
              return (
                <Fade
                  cascade={true}
                  key={slideIndex}
                  className="text-black dark:text-white"
                >
                  <div className="flex space-x-0 md:space-x-10 justify-center">
                    {slideData.map((slideItem, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex flex-col-reverse items-center"
                        onMouseEnter={() => setHoveredIndex(itemIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <slideItem.icon
                          className={`w-8 h-8 md:w-20 md:h-20 m-2 ${
                            hoveredIndex === itemIndex
                              ? "text-green"
                              : "text-black dark:text-white"
                          } text-4xl cursor-pointer transition-colors duration-300 delay-50 hover:text-green dark:hover:text-green`}
                        />
                        <p
                          className={`absolute z-10 md:bg-green text-xs px-4 py-0.5 shadow-xl text-white text-center items-center transition-opacity duration-300 delay-50 ${
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
      </Slide>
    </>
  );
};

export default Tools;
