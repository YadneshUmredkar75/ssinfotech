import React from "react";
import About from "../components/About";
import OurTeam from "../components/OurTeam"
import BoardAdvisory from "../components/BoardAdvisory"
import SsGbranch from "../components/SsGbranch"
import LogoSlider from "../components/Logoslider";
import CompanyGoal from "../components/CompanyGoal";


const AboutUs = () => {
  return(
    <>
    {/* about us first content */}
    <section className="flex flex-col items-center justify-center text-center space-y-8 bg-gray pt-25 px-28">
      <About/>
    </section>

    <section className="flex flex-col items-center justify-center text-center space-y-8 bg-gray pt-25 px-28">
      <OurTeam />
      <BoardAdvisory/>
    </section>
    
    <section className="flex flex-col items-center justify-center text-center space-y-8 bg-gray pt-25 px-28">
      <h2 className="text-3xl md:text-4xl font-bold text-[#AB1EA9] text-center mt-20">
        Our Branches
      </h2>
      <SsGbranch/>
    </section>

    <section className="flex flex-col items-center justify-center text-center space-y-8 bg-gray pt-25 px-28">
      <LogoSlider/>
    </section>

    <section className="flex flex-col items-center justify-center text-center space-y-8 bg-gray pt-25 px-28">
      <CompanyGoal/>
    </section>

      


    </>
  )
};

export default AboutUs;
