import { useState } from "react";
import { FcCommandLine } from "react-icons/fc";
import TextLeft from "../../Components/Header/TextLeft";
import { Bounce, Slide } from "react-awesome-reveal";
import { services } from "../../Dummy/services";
import Button from "../../Components/Button/Button";
import { Carousel } from "react-responsive-carousel";
import "../../assets/css/global.css";

const Service = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const [menu, setMenu] = useState(false);

  // if (menu == false) {
  //   return;
  // }

  const handleButtonClick = (service) => {
    setActiveService(service);
    setMenu(false);
  };

  const handleMenu = () => {
    setMenu(!menu);
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
                className="hidden md:flex"
                text={data.title}
                onClick={() => handleButtonClick(data)}
              />
            </Slide>
          ))}
        </div>

        <div className=" absolute z-50  md:hidden mt-5 space-x-2 w-full justify-between">
          <button
            onClick={handleMenu}
            className="w-full text-center bg-green text-white font-semibold py-2 rounded-md shadow"
          >
            Choose Services
          </button>
          {services.map((data, key) => (
            <>
              <Slide key={key}>
                <div className="bg-green">
                  <div className="w-full bg-green ">
                    <div className={`${menu ? "" : "hidden"}`}>
                      {menu && (
                        <button
                          className="text-white py-3 font-medium px-3"
                          onClick={() => handleButtonClick(data)}
                        >
                          {data.title}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Slide>
            </>
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

        {activeService && (
          <div className=" py-5 items-center text-black dark:text-white border dark:border-white border-black mt-20 md:mt-10  rounded-xl">
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
      </div>
    </>
  );
};

export default Service;
