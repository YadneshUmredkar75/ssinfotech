import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  { id: 1, title: "REAL TIME PROJECT DEVELOPMENT", description: "Build live projects with mentorship.", icon: "🚀" },
  { id: 2, title: "JOBS CONSULTANT", description: "Placement guidance and resume review.", icon: "💼" },
  { id: 3, title: "CAREER CONSULTANT", description: "Career path planning and interview prep.", icon: "🎯" },
  { id: 4, title: "SOFTWARE DEVELOPMENT", description: "Custom software solutions & consulting.", icon: "💻" },
  { id: 5, title: "WEBS & APP DEVELOPMENT", description: "Full-stack web & mobile apps.", icon: "🌐" },
  { id: 6, title: "DIGITAL MARKETING", description: "SEO, Ads, and growth strategies.", icon: "📈" },
  { id: 7, title: "ILETS/GRE/TOFEL TRAINING", description: "Exam coaching and mock tests.", icon: "🎓" },
  { id: 8, title: "CAMPUS HIRING PROGRAM", description: "Drive campus recruitment events.", icon: "🏢" },
  { id: 9, title: "TRAINING PROGRAM", description: "Skill bootcamps and workshops.", icon: "⚡" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ServiceCard = ({ service, inView }) => {
  const cardControls = useAnimation();
  const tiltControls = useAnimation(); // used for tilt overrides
  const cardRef = useRef(null);

  useEffect(() => {
    if (inView) {
      // start the entrance animation
      cardControls.start("visible");
    }
  }, [inView, cardControls]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 7; // max 7 deg
    const rotateY = ((x - centerX) / centerX) * 7;

    // animate tilt (these will temporarily override transforms)
    tiltControls.start({
      rotateX: -rotateX,
      rotateY: rotateY,
      scale: 1.04,
      boxShadow: "0 20px 30px rgba(171, 30, 169, 0.18)",
      transition: { type: "spring", stiffness: 300, damping: 25 }
    });
  };

  const handleMouseLeave = () => {
    tiltControls.start({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 8px 15px rgba(0,0,0,0.08)",
      transition: { type: "spring", stiffness: 300, damping: 25 }
    });
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={cardControls}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        animate={tiltControls}
        initial={{ rotateX: 0, rotateY: 0, scale: 1, boxShadow: "0 8px 15px rgba(0,0,0,0.08)" }}
        style={{ perspective: 1000 }}
        className="bg-white rounded-2xl border border-[#F3F4F6] p-8 cursor-pointer relative overflow-hidden h-60"
      >
        {/* subtle overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.06 }}
          transition={{ duration: 0.25 }}
          style={{ backgroundColor: "#AB1EA9" }}
        />

        <motion.div
          className="text-6xl mb-6 text-[#AB1EA9] relative z-10"
          whileHover={{ y: [0, -6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {service.icon}
        </motion.div>

        <motion.h3
          className="text-2xl font-bold text-[#111827] mb-4 relative z-10"
          whileHover={{ color: "#AB1EA9" }}
          transition={{ duration: 0.2 }}
        >
          {service.title}
        </motion.h3>

        <motion.p
          className="text-[#111827]/80 leading-relaxed text-base relative z-10"
          whileHover={{ color: "#5B21B6" }}
          transition={{ duration: 0.2 }}
        >
          {service.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] relative overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.12, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 left-10 w-72 h-72 bg-[#AB1EA9]/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.12, scale: 1.3 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#AB1EA9]/20 rounded-full blur-3xl"
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
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#AB1EA9] to-[#8B1E99] bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            SERVICES
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#111827]/70 max-w-3xl mx-auto leading-relaxed"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} inView={inView} />
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
            whileHover={{ scale: 1.05, backgroundColor: "#FFB347", boxShadow: "0 12px 30px rgba(255, 179, 71, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#AB1EA9] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-colors duration-300"
          >
            Explore All Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
