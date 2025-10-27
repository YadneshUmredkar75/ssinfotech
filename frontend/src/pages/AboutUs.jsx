import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Stars, Camera, Users, Target, Eye } from "lucide-react";
import bgPattern from '../../public/service/service/bg.png';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Reduced delay for smoother stagger
      duration: 0.6, // Slightly faster for snappier feel
      ease: "easeOut",
    },
  }),
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Tighter stagger for smoother flow
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -15, 0], // Reduced amplitude for smoother motion
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.03, 1], // Subtler scale for less CPU strain
    opacity: [0.2, 0.4, 0.2],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const AboutUs = () => {
  // Memoize static data to prevent re-computation
  const sections = useMemo(
    () => [
      {
        title: "Who We Are",
        subtitle: "About Our Company",
        icon: Users,
        image: "/img/imag3.jpg",
        alt: "Company",
        content: [
          "We are a team of technology enthusiasts, innovators, and creative thinkers dedicated to delivering top-tier IT solutions. Our focus is to empower businesses with cutting-edge software, web, and mobile technologies.",
          "From startups to enterprises, we craft solutions that solve real problems, boost productivity, and deliver lasting impact.",
        ],
      },
      {
        title: "Our Founder's Vision",
        subtitle: "Founder",
        icon: Sparkles,
        image: "/imgs/gallery/founder1.jpg",
        alt: "Founder",
        content: [
          '"Our journey began with a simple yet powerful vision: to create technology solutions that truly make a difference. We believe in the transformative power of innovation and its ability to shape a better future for businesses and communities alike."',
          '"At SS Infotech, we\'re not just building software; we\'re building relationships, trust, and lasting partnerships. Every line of code we write carries our commitment to excellence and our passion for creating meaningful impact."',
          "- John Doe, Founder & CEO",
        ],
        order: "md:order-2",
        contentOrder: "order-2 md:order-1",
      },
      {
        title: "Driving Innovation Forward",
        subtitle: "Director - SS Infotech",
        icon: Target,
        image: "/imgs/gallery/founder2.jpg",
        alt: "SS Infotech Director",
        content: [
          '"As the Director of SS Infotech, my focus is on fostering innovation while maintaining the highest standards of quality. We\'re committed to delivering solutions that not only meet but exceed our clients\' expectations."',
          '"Our team\'s dedication to continuous learning and adaptation in this rapidly evolving tech landscape is what sets us apart. We embrace challenges as opportunities to innovate and grow."',
          "- Jane Smith, Director - SS Infotech",
        ],
      },
      {
        title: "Global Perspective, Local Impact",
        subtitle: "Overseas Director",
        icon: Eye,
        image: "/imgs/gallery/founder3.jpg",
        alt: "Overseas Director",
        content: [
          '"As the Overseas Director, I bridge the gap between global technological trends and local business needs. Our international experience allows us to bring world-class solutions to our clients while understanding their unique regional challenges."',
          '"We\'re constantly exploring new markets and technologies to ensure that SS Infotech remains at the forefront of global innovation. Our diverse team brings together the best practices from around the world to deliver exceptional results."',
          "- Michael Lee, Overseas Director",
        ],
        order: "md:order-2",
        contentOrder: "order-2 md:order-1",
      },
    ],
    []
  );

  const missionVision = useMemo(
    () => [
      {
        title: "Our Vision",
        icon: Eye,
        content:
          "To be a globally recognized leader in technology, driving innovation and digital transformation with next-generation IT solutions that shape the future.",
      },
      {
        title: "Our Mission",
        icon: Target,
        content:
          "To deliver exceptional digital products with passion, performance, and precision, while fostering long-term client relationships built on trust and mutual success.",
      },
    ],
    []
  );

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-800 font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-purple-400/20 rounded-full blur-xl will-change-transform"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-32 right-20 w-24 h-24 bg-pink-400/30 rounded-full blur-2xl will-change-transform"
        animate={{
          y: [0, -30, 0],
          x: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />

      {/* Floating Stars */}
      <motion.div
        className="absolute top-1/4 left-1/5 will-change-transform"
        variants={floatingAnimation}
        animate="animate"
      >
        <Stars className="h-5 w-5 text-purple-300" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/3 will-change-transform"
        variants={floatingAnimation}
        animate="animate"
        style={{ animationDelay: "1.5s" }}
      >
        <Sparkles className="h-4 w-4 text-pink-300" />
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 text-white">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl will-change-transform"
          variants={pulseAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-500/10 rounded-full blur-3xl will-change-transform"
          variants={pulseAnimation}
          animate="animate"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute inset-0">
          <img
            src={bgPattern}
            alt="About Banner"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="space-y-6"
          >
            <motion.div
              className="inline-flex items-center justify-center mb-4"
              variants={item}
            >
              <div className="bg-purple-400/20 backdrop-blur-sm text-purple-100 px-5 py-2 text-lg border border-purple-300/30 shadow-lg shadow-purple-500/20 rounded-full font-semibold">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                About Our Journey
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Discover Our{" "}
              <motion.span
                className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Story
              </motion.span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl md:text-2xl text-purple-100 leading-relaxed max-w-4xl mx-auto"
            >
              Discover our mission, vision, and the dedicated team driving our{" "}
              <motion.span
                className="font-semibold text-white"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                success in technology innovation.
              </motion.span>
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 will-change-transform"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-white/70 rounded-full mt-1"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`py-16 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
            index % 2 === 1 ? "bg-gradient-to-br from-white to-purple-50" : "bg-gradient-to-br from-purple-50 to-white"
          }`}
        >
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-3xl rounded-full will-change-transform"
            animate={{
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.05, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <motion.div variants={fadeUp} custom={0} className={`relative ${section.order || ""}`}>
              <motion.img
                src={section.image}
                alt={section.alt}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                loading="lazy"
                onError={(e) => (e.target.src = "/imgs/placeholder.jpg")} // Fallback image
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -inset-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-15 blur-xl -z-10 will-change-transform"
                animate={{
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeUp}
              custom={0.2}
              className={`space-y-6 ${section.contentOrder || ""}`}
            >
              <motion.div className="inline-flex items-center mb-4" variants={item}>
                <div className="bg-purple-100 p-3 rounded-xl">
                  <section.icon className="w-6 h-6 text-purple-600" />
                </div>
                <span className="ml-3 text-purple-600 font-semibold">{section.subtitle}</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                {section.title}
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-purple-700">
                {section.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
      ))}

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-3xl rounded-full will-change-transform"
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.05, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="space-y-4 mb-12"
          >
            <motion.h2
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900 mb-4"
            >
              Our Vision & Mission
            </motion.h2>
            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-purple-600 max-w-3xl mx-auto"
            >
              Driving innovation and excellence in everything we do
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {missionVision.map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={index * 0.2}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 group"
              >
                <motion.div
                  className="bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors will-change-transform"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  <card.icon className="w-6 h-6 text-purple-600" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3">{card.title}</h3>
                <p className="text-purple-700 leading-relaxed text-sm sm:text-base">{card.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;