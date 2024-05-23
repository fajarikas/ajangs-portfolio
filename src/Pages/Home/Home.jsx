import React from "react";
import HomeHero from "../../Components/Hero/HomeHero";
import AboutMe from "../../Components/Hero/AboutMe";
import Proficient from "../../Components/Proficient/Proficient";
import Tools from "../../Components/Hero/Tools";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <div className="h-screen">
        <HomeHero />
      </div>
      <div className="mt-72 md:mt-10">
        <AboutMe
          content="Welcome to my portfolio! Here, you'll discover a meticulously curated collection showcasing the pinnacle of my professional endeavors. Delve into a diverse array of projects, each meticulously crafted to embody the essence of quality, innovation, and an unwavering dedication to perfection.
          Embark on a journey through my repertoire, where you'll encounter a myriad of projects spanning various domains. From captivating web designs that seamlessly blend aesthetics with functionality, to intricate graphic designs that breathe life into visual storytelling, every creation reflects my passion for excellence and creativity.
          At the core of this portfolio lies my expertise as a seasoned web developer. With specialization in frontend, backend, and fullstack development, I bring a wealth of knowledge and experience to the table. In the realm of frontend development, I wield the power of HTML, CSS, and JavaScript to craft immersive user experiences that captivate and engage.
          Venturing into the realm of backend development, I navigate the intricacies of server-side technologies with finesse. Armed with languages like Node.js, Python, and PHP, I architect robust and scalable backend systems that form the backbone of web applications.
          "
        />
        <div className="mt-10">
          <Tools />
        </div>
      </div>
    </>
  );
};

export default Home;
