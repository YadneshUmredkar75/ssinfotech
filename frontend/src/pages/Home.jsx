import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import CompanyGoal  from "../components/CompanyGoal";
import SsGbranch from "../components/SsGbranch";
import BoardAdvisory from "../components/BoardAdvisory";
import OurTeam from "../components/OurTeam";
import LogoSlider from "../components/Logoslider";
import ContactForm from "../components/ContactForm";
import Services from "../components/Services";
const Home = () => {
  return (
    <div>
      <Hero/>
      <CompanyGoal/>
      <About/>
      <section className="flex flex-col items-center justify-center text-center space-y-8 bg-gray pt-25">
      <h2 className="text-3xl md:text-4xl font-bold text-[#AB1EA9] mb-12 text-center">
        Our Branches
      </h2>
      <SsGbranch/>
      </section>
      <Services/>
      {/* Meet the Team */}
      {/* <section className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 bg-gray-50 ">
        <OurTeam />
        <BoardAdvisory/>
      </section> */}
      {/* Our Client Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-8">
      <LogoSlider/>
      </section>
      <ContactForm/>
    </div>
  );
};

export default Home;
