// BoardAdvisory.jsx
import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "ALLAN ABRAHAM",
    role: "CEO & Founder",
    image: "/img/t2.png",
    description:
      "Visionary leader who drives product strategy and cultivates high-performance teams.",
  },
  {
    name: "JESSICA MATHEWS",
    role: "Technical Head",
    image: "/img/t1.png",
    description:
      "Architect of scalable systems with a focus on clean code and developer experience.",
  },
  {
    name: "ROHAN KAPOOR",
    role: "Lead Developer",
    image: "/img/t2.png",
    description:
      "Full-stack dev who builds robust features and mentors junior engineers.",
  },
  {
    name: "PRIYA SHARMA",
    role: "Marketing Head",
    image: "/img/t1.png",
    description:
      "Growth-focused marketer who crafts brand stories and runs acquisition funnels.",
  },
  {
    name: "DAVID MILLER",
    role: "UI/UX Designer",
    image: "/img/t2.png",
    description:
      "Design-first thinker who creates delightful and accessible user experiences.",
  },
  {
    name: "NATASHA GUPTA",
    role: "HR Manager",
    image: "/img/t1.png",
    description:
      "People-first HR lead building culture, hiring pipelines and learning programs.",
  },
];

export default function BoardAdvisory() {
  return (
    <section className="text-center space-y-4 rounded-4xl">
      <h2 className="text-3xl font-bold text-[#AB1EA9]">Our Board Of Advisory</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Meet the dedicated minds behind our stechnical Expertise
      </p>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 24 },
            1280: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="py-6"
        >
          {teamMembers.map((member, idx) => (
            <SwiperSlide key={idx}>
              <article className="group relative flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                {/* LEFT: Image (55% on md+, full width on mobile) */}
                <div className="md:w-[55%] w-full h-64 md:h-auto bg-gray-100">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23737473' font-family='Arial' font-size='20'>Image not found</text></svg>";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      No image
                    </div>
                  )}
                </div>

                {/* RIGHT: Details (45% on md+, full width on mobile) */}
                <div className="md:w-[45%] w-full flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-[#AB1EA9] font-medium pt-4">{member.role}</p>
                </div>

                {/* HOVER OVERLAY: appears on hover, aligned to right 45% on md+, full width on mobile */}
                <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {/* Overlay box positioned to right on md+, full on mobile */}
                  <div className="w-full md:w-[45%] h-full md:ml-auto bg-[#cf0dcc] bg-opacity-90 flex  p-6 rounded-r-2xl md:rounded-r-2xl ">
                    <div className="text-white pointer-events-auto">
                      {/* <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-sm font-medium">{member.role}</p> */}

                      {/* Two-line clamp using inline CSS (works without Tailwind plugin) */}
                      <p
                        className="mt-3 text-sm"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
