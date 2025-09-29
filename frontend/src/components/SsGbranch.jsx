// CirBranch.jsx
import React, { useState, useEffect, useRef } from "react";

export default function SsGbranch() {
  const [hovered, setHovered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const containerRef = useRef(null);

  const branches = [
    "SS Educational Consultancy Services",
    "SS Infotech",
    "SS Overseas Education",
    "SS Career Counseling Centre",
    "SS Foundation",
  ];

  const angles = branches.map((_, i) => i * (360 / branches.length));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowHint(true);
            setTimeout(() => setShowHint(false), 3000); // hide after 3s
            observer.disconnect(); // run only once
          }
        });
      },
      { threshold: 0.5 } // when 50% visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center relative min-h-[600px]"
    >
      {/* Orbit animation */}
      <style>{`
        @keyframes spinSlow { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        .spin-slow { animation: spinSlow 12s linear infinite; }
      `}</style>

      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        {/* Orbit container */}
        <div className={`${hovered ? "spin-slow" : ""} absolute inset-0`}></div>

        {/* Rectangles */}
        {angles.map((angle, idx) => {
        const distance = 220;
        const transformWhenHovered = `translate(-50%, -50%) rotate(${angle}deg) translateX(${distance}px) rotate(-${angle}deg)`;
        const transformWhenIdle = `translate(-50%, -50%)`;

        return (
            <div
            key={idx}
            className={`absolute left-1/2 top-1/2 transition-all duration-700 ease-out 
                ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
            style={{ transform: hovered ? transformWhenHovered : transformWhenIdle }}
            >
            <div className="min-w-fit px-6 py-3 rounded-xl shadow-md  flex m-[20px] items-center justify-center text-[#111827] font-semibold text-center  ">
                {branches[idx]}
            </div>
            </div>
        );
        })}

        {/* Center circle */}
        <div className="relative z-20 flex items-center justify-center ">
        <div
           className={`transition-all duration-500 ease-in-out 
    ${hovered ? "w-72 h-72" : ""} 
    rounded-full flex items-center justify-center cursor-pointer select-none`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)}
            onTouchEnd={() => setHovered(false)}
        >
            {/* Inner dark circle */}
            <div className="w-40 h-40 rounded-full bg-[#111827] flex items-center justify-center text-white font-bold text-lg text-center px-2">
            S S Group
            </div>
        </div>
        </div>

      </div>

      {/* Popup hint */}
      {showHint && (
        <div className="absolute bottom-6 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-md animate-fadeIn">
          Hover or tap the circle to expand
        </div>
      )}
    </div>
  );
}

