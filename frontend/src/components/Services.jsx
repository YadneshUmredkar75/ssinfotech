import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

 const services = [
  { id: 1, title: "REAL TIME PROJECT DEVELOPMENT", description: "...", icon: "🚀", color: "#FF6B6B" }, // red
  { id: 2, title: "JOBS CONSULTANT", description: "...", icon: "💼", color: "#4ECDC4" }, // teal
  { id: 3, title: "CAREER CONSULTANT", description: "...", icon: "🎯", color: "#FFD93D" }, // yellow
  { id: 4, title: "SOFTWARE DEVELOPMENT", description: "...", icon: "💻", color: "#6C63FF" }, // purple
  { id: 5, title: "WEBS & APP DEVELOPMENT", description: "...", icon: "🌐", color: "#FF8C42" }, // orange
  { id: 6, title: "DIGITAL MARKETING", description: "...", icon: "📈", color: "#00BFA6" }, // green
  { id: 7, title: "ILETS/GRE/TOFEL TRAINING", description: "...", icon: "🎓", color: "#F72585" }, // pink
  { id: 8, title: "CAMPUS HIRING PROGRAM", description: "...", icon: "🏢", color: "#3A86FF" }, // blue
  { id: 9, title: "TRAINING PROGRAM", description: "...", icon: "⚡", color: "#FFBE0B" } // golden yellow
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0, rotate: 0 },
    hover: { 
      scale: 1.07, 
      y: -8,
      rotate: -1.5,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Blobs */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 w-72 h-72 bg-[#AB1EA9]/30 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1.3 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#AB1EA9] to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            SERVICES
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Embark on your journey to success with <span className="font-semibold text-[#AB1EA9]">SS Infotech</span>, 
            where we offer a comprehensive range of services to propel you towards your goals.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
           <motion.div
  key={service.id}
  variants={itemVariants}
  whileHover="hover"
  initial="initial"
  className="relative group"
>
  <motion.div
    variants={cardHoverVariants}
    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full cursor-pointer relative overflow-hidden"
    onMouseEnter={() => setActiveService(service.id)}
    onMouseLeave={() => setActiveService(null)}
    style={{
      boxShadow: activeService === service.id 
        ? `0 10px 30px ${service.color}55` // glow effect
        : "0 5px 15px rgba(0,0,0,0.1)"
    }}
  >
    {/* Hover Overlay */}
    <motion.div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
      style={{ backgroundColor: service.color }}
      transition={{ duration: 0.3 }}
    />

    {/* Icon */}
    <div className="text-5xl mb-6 relative z-10">{service.icon}</div>

    {/* Title */}
    <h3 className="text-xl font-bold text-gray-800 mb-4 relative z-10 group-hover:text-white">
      {service.title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 relative z-10 group-hover:text-gray-100">
      {service.description}
    </p>
  </motion.div>
</motion.div>

          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(171, 30, 169, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-gradient-to-r from-[#AB1EA9] to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl inline-block"
          >
            Explore All Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
