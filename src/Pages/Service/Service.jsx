import { useState } from "react";
import { FcCommandLine } from "react-icons/fc";
import TextLeft from "../../Components/Header/TextLeft";
import { Bounce, Slide } from "react-awesome-reveal";
import { services } from "../../Dummy/services";
import Button from "../../Components/Button/Button";
import { Carousel } from "react-responsive-carousel";

const Service = () => {
  const [activeService, setActiveService] = useState(services[0]); // Set default service to the first one

  const handleButtonClick = (service) => {
    setActiveService(service);
  };

  return (
    <>
      <div className="mt-28 min-h-screen">
        <Slide direction="left">
          <TextLeft title="My Special Services" />
        </Slide>

        <div className=" hidden md:flex mt-5 space-x-2 w-full justify-between">
          {services.map((data, key) => (
            <Slide key={key}>
              <Button
                className="flex"
                text={data.title}
                onClick={() => handleButtonClick(data)}
              />
            </Slide>
          ))}
        </div>

        <Bounce className="hidden md:inline">
          {activeService && (
            <div className=" py-5 items-center text-black dark:text-white border border-black dark:border-white mt-10 rounded-xl">
              <div className="flex items-center mx-auto w-full text-center justify-center space-x-4">
                <activeService.icon
                  className="items-center text-center"
                  size={50}
                />
                <p className="mt-2 text-lg md:text-2xl text-justify font-semibold   ">
                  {activeService.title}
                </p>
              </div>
              <div className="mt-5 block items-center text-justify w-11/12 mx-auto">
                <p>{activeService.description}</p>
              </div>
            </div>
          )}
        </Bounce>

        <Carousel showArrows className="inline md:hidden">
          {activeService && (
            <div className=" py-5 items-center text-black dark:text-white border border-white mt-10 rounded-xl">
              <div className="flex items-center mx-auto w-full text-center justify-center space-x-4">
                <activeService.icon
                  className="items-center text-center"
                  size={50}
                />
                <p className="mt-2 text-lg md:text-xl text-justify font-semibold   ">
                  {activeService.title}
                </p>
              </div>
              <div className="mt-5 block items-center text-sm text-justify w-11/12 mx-auto">
                <p>{activeService.description}</p>
              </div>
            </div>
          )}
        </Carousel>
      </div>
    </>
  );
};

export default Service;
