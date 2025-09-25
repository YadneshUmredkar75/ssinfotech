import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faStar, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [hovered, setHovered] = useState(null);
  const cardDetails = {
    education: {
      title: "Education",
      desc: "We believe education drives growth. By empowering learners, we open doors to academic and professional excellence.",
      img: "/img/edu1.jpg",
      icon: faAward,
    },
    training: {
      title: "Training",
      desc: "Our training programs are designed to prepare individuals with hands-on skills and industry-ready expertise.",
      img: "/img/edu2.jpg",
      icon: faStar,
    },
    innovation: {
      title: "Innovation",
      desc: "We foster creativity and encourage innovation that aligns with modern business and technology needs.",
      img: "/img/edu3.jpg",
      icon: faLightbulb,
    },
  };

  return (
    <section className="py-12"> {/* Fixed: Removed h-lvh, added padding */}
      <div className="px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between gap-10">
        {/* Left Div */}
        <div className="md:w-1/2 flex flex-col justify-center transition-all duration-300 bg-[#F3F4F6] px-4 rounded-3xl">
          {!hovered && (
            <div className="transition-opacity duration-300">
              <h1 className="text-4xl font-bold mb-6 text-[#AB1EA9]">About Us</h1>
              <p className="mb-4 text-justify text-gray-700">
                SS Infotech, where innovation meets excellence in the realm of IT solutions.
              </p>
              <p className="text-justify text-gray-700">
                SS Infotech is a premier software organization with strategic presence in Pune and Nagpur, dedicated to delivering cutting-edge IT solutions and digital marketing services. We specialize in transforming business visions into digital reality through our comprehensive suite of services.
              </p>
            </div>
          )}

          {hovered && (
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="w-full h-44 md:h-56 overflow-hidden">
                <img
                  src={cardDetails[hovered].img}
                  alt={cardDetails[hovered].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col items-start">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-full bg-[#AB1EA9]/10">
                    <FontAwesomeIcon icon={cardDetails[hovered].icon} size="lg" color="#AB1EA9" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111827]">
                    {cardDetails[hovered].title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm">
                  {cardDetails[hovered].desc}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Div */}
        <div className="md:w-1/2 flex flex-col items-center bg-[#F3F4F6] px-4 rounded-3xl py-4">
          <ImageSlider />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-10">
            {/* Education */}
            <div
              onMouseEnter={() => setHovered("education")}
              onMouseLeave={() => setHovered(null)}
              className="relative p-5 rounded-xl shadow-lg border border-[#AB1EA9] bg-white group cursor-pointer overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <FontAwesomeIcon icon={faAward} size="2x" color="#AB1EA9" />
                <h3 className="font-bold text-[#AB1EA9] text-lg">Education</h3>
              </div>
            </div>

            {/* Training */}
            <div
              onMouseEnter={() => setHovered("training")}
              onMouseLeave={() => setHovered(null)}
              className="relative p-5 rounded-xl shadow-lg border border-[#AB1EA9] bg-white group cursor-pointer overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <FontAwesomeIcon icon={faStar} size="2x" color="#AB1EA9" />
                <h3 className="font-bold text-[#AB1EA9] text-lg">Training</h3>
              </div>
            </div>

            {/* Innovation */}
            <div
              onMouseEnter={() => setHovered("innovation")}
              onMouseLeave={() => setHovered(null)}
              className="relative p-5 rounded-xl shadow-lg border border-[#AB1EA9] bg-white group cursor-pointer overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <FontAwesomeIcon icon={faLightbulb} size="2x" color="#AB1EA9" />
                <h3 className="font-bold text-[#AB1EA9] text-lg">Innovation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;