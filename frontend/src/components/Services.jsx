import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "REAL TIME PROJECT DEVELOPMENT",
      description: "We specialise in creating dynamic projects that respond to real-world needs and challenges, ensuring timely and effective solutions.",
      icon: "🚀"
    },
    {
      id: 2,
      title: "JOBS CONSULTANT",
      description: "Navigate the job market confidently with our expert guidance, tailored to your needs at every step – from resume crafting to interview preparation.",
      icon: "💼"
    },
    {
      id: 3,
      title: "CAREER CONSULTANT",
      description: "Chart your career path with our support, focusing on goal-setting, skill assessment, and ongoing guidance for professional growth and success.",
      icon: "🎯"
    },
    {
      id: 4,
      title: "SOFTWARE DEVELOPMENT",
      description: "Our comprehensive software development services are complemented by expert training programs, empowering individuals and teams to maximize their potential.",
      icon: "💻"
    },
    {
      id: 5,
      title: "WEBS & APP DEVELOPMENT",
      description: "From captivating websites to user-friendly mobile applications, we craft digital experiences that leave a lasting impression and drive engagement.",
      icon: "🌐"
    },
    {
      id: 6,
      title: "DIGITAL MARKETING",
      description: "From compelling content to seamless social media strategies, we specialize in crafting digital experiences that resonate with your audience and spark meaningful connections.",
      icon: "📈"
    },
    {
      id: 7,
      title: "ILETS/GRE/TOFEL TRAINING",
      description: "Prepare for academic and professional success with our specialized training programs, designed to help you excel in English proficiency exams.",
      icon: "🎓"
    },
    {
      id: 8,
      title: "CAMPUS HIRING PROGRAM",
      description: "Connect with top-tier talent through our campus hiring initiatives, bridging the gap between academia and industry to build a pipeline of skilled professionals.",
      icon: "🏢"
    },
    {
      id: 9,
      title: "TRAINING PROGRAM",
      description: "Our training program is meticulously designed to facilitate skill acquisition across all phases of software development, including creation, design, deployment, and support.",
      icon: "⚡"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#AB1EA9]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#AB1EA9]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-[#AB1EA9] mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            SERVICES
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Embark on your journey to success with SS Infotech, where we offer a comprehensive range of services to propel you towards your goals. From real-time project development to expert career consulting, we're here to support you every step of the way.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
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
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full cursor-pointer transform-gpu"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Icon */}
                <motion.div 
                  className="text-4xl mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-xl font-bold text-[#AB1EA9] mb-4"
                  whileHover={{ color: "#8b1a8a" }}
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: activeService === service.id ? 1 : 0.9 }}
                >
                  {service.description}
                </motion.p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#AB1EA9]/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#AB1EA9] to-purple-400 bg-clip-padding"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor'
                  }}
                />
              </motion.div>

              {/* Floating Particles */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-[#AB1EA9] rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(171, 30, 169, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#AB1EA9] to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;