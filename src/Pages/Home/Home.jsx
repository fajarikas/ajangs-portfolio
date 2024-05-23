import React, { useEffect, useState } from "react";
import HomeHero from "../../Components/Hero/HomeHero";
import AboutMe from "../../Components/Hero/AboutMe";
import Proficient from "../../Components/Proficient/Proficient";
import Tools from "../../Components/Hero/Tools";
import { Fade } from "react-awesome-reveal";
import FollowMe from "../../Components/FollowMe/FollowMe";
import Loading from "../../Components/Loading/Loading";

const Home = () => {
  return (
    <>
      <div id="home" className="h-screen">
        <HomeHero />
      </div>
    </>
  );
};

export default Home;
