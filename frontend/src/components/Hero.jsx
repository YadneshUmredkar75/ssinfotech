import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slides from "../data";
import { Play, Pause } from "lucide-react"; // Removed ChevronLeft and ChevronRight

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length, isPlaying]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden bg-gray-900 mx-auto group">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Media Content */}
              {slide.type === "image" ? (
                <img
                  src={slide.url}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              ) : (
                <video
                  src={slide.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}

              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Content Overlay */}
              {slide.title && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-center text-white max-w-4xl px-6"
                  >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.cta && (
                      <button className="bg-[#AB1EA9] hover:bg-[#8b1a8a] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        {slide.cta}
                      </button>
                    )}
                  </motion.div>
                </div>
              )}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Play/Pause Button */}
      {/* <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Slide Indicator */}
      {/* <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
        {current + 1} / {slides.length}
      </div> */} 

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index 
                ? "bg-[#AB1EA9] scale-125" 
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-[#AB1EA9]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={current}
        />
      </div>
    </div>
  );
};

export default Hero;