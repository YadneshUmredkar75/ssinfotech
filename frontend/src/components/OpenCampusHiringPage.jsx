"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaUsers, FaLaptopCode, FaCheckCircle } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

// Define custom purple shades for consistency
const PRIMARY_PURPLE = "#AB1EA9";
const LIGHT_PURPLE = "#C4B5FD";
const DARK_PURPLE = "#7C3AED";
const PURPLE_GRADIENT = `linear-gradient(135deg, ${PRIMARY_PURPLE} 0%, ${LIGHT_PURPLE} 100%)`;

// STEP CARD - Enhanced with subtle purple borders and better shadows
const StepCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(171, 30, 169, 0.1)" }}
    className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 flex flex-col items-center hover:border-purple-200 transition-all duration-300"
  >
    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-full mb-4 shadow-md">
      <Icon className="text-3xl text-white" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
  </motion.div>
);

// DRIVE CARD - Improved with purple accents, better spacing, and status indicators
const DriveCard = ({ drive }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 bg-purple-100 text-purple-600 px-2 py-1 rounded-bl-lg text-sm font-medium">
      {drive.mode}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">
      {drive.collegeName}
    </h3>
    <div className="space-y-2 mb-4 text-sm">
      <p className="text-gray-700 flex items-center">
        <span className="mr-2">📅</span> {drive.date}
      </p>
      <p className="text-gray-700 flex items-center">
        <span className="mr-2">🎯</span> Roles: <span className="font-medium ml-1">{drive.roles.join(", ")}</span>
      </p>
    </div>
    <p className="text-red-500 font-semibold mb-4 text-sm">
      Deadline: {drive.deadline}
    </p>
    <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg">
      Apply Now
    </button>
  </motion.div>
);

// TESTIMONIAL CARD - Added quote styling and purple highlights
const TestimonialCard = ({ testimonial }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white rounded-xl shadow-lg p-6 relative border border-purple-50 hover:border-purple-200 transition-all duration-300"
  >
    <div className="absolute top-4 left-4 text-purple-400 text-2xl">“</div>
    <p className="text-gray-700 italic mb-4 pl-6 text-lg leading-relaxed">"{testimonial.text}"</p>
    <div className="flex items-center mt-4">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
        {testimonial.name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
        <p className="text-purple-600 text-sm font-medium">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

// REGISTRATION FORM - Enhanced with purple theme, better validation feedback, and animations
const RegistrationForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", college: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.college.trim()) newErrors.college = "College is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(form);
    setForm({ name: "", email: "", college: "" });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl border border-purple-100"
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
          Register for a Drive
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                errors.name ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                errors.email ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="text"
              name="college"
              value={form.college}
              onChange={handleChange}
              placeholder="College Name"
              className={`w-full border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                errors.college ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Submit Registration
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

// FAQ ITEM - Improved accordion with purple indicators and smooth animations
const AccordionItem = ({ faq, isOpen, onToggle }) => (
  <motion.div
    initial={false}
    animate={{ height: isOpen ? "auto" : "auto" }}
    className="border-b border-purple-100 last:border-b-0"
  >
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
      className="w-full flex justify-between items-center p-4 font-semibold text-left text-gray-800 hover:bg-purple-50 transition-colors duration-200"
    >
      <span className="text-lg">{faq.question}</span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        className="text-purple-600 text-xl ml-2"
      >
        ▼
      </motion.span>
    </motion.button>
    <motion.p
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
      className="mt-0 overflow-hidden p-4 text-gray-600 bg-purple-25 border-l-4 border-purple-200"
    >
      {faq.answer}
    </motion.p>
  </motion.div>
);

const OpenCampusHiringPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [registrations, setRegistrations] = useState([]);

  const steps = [
    { icon: FaUniversity, title: "Schedule a Drive", description: "Book a date and share eligibility criteria with ease." },
    { icon: FaLaptopCode, title: "Assessments & Interviews", description: "Conduct online or on-campus tests followed by structured interviews." },
    { icon: FaUsers, title: "Offer & Onboarding", description: "Release offers with comprehensive support for new hires." },
    { icon: FaCheckCircle, title: "Post-Hire Support", description: "Provide ongoing mentorship and training for seamless integration." },
  ];

  const drives = [
    { id: 1, collegeName: "MIT College", date: "2024-03-15", roles: ["Developer", "Designer"], mode: "On-campus", deadline: "2024-03-01" },
    { id: 2, collegeName: "VIT University", date: "2024-03-20", roles: ["Analyst", "Tester"], mode: "Virtual", deadline: "2024-03-05" },
    { id: 3, collegeName: "IIT Bombay", date: "2024-04-01", roles: ["Engineer", "Manager"], mode: "On-campus", deadline: "2024-03-15" },
  ];

  const testimonials = [
    { id: 1, name: "Mrunal Umredkar", role: "Student", text: "If you want to make a career in Salesforce then SS Infotech helps a lot. The course is practical and industry-ready." },
    { id: 2, name: "Priya Sharma", role: "Graduate", text: "SS Infotech's campus hiring opened doors for me. The process was smooth and supportive." },
    { id: 3, name: "Rahul Patel", role: "Student", text: "The open campus drive was a game-changer. Training sessions prepared me for interviews." },
  ];

  const faqs = [
    { id: 1, question: "What is Open Campus Hiring?", answer: "A program where SS Infotech visits campuses to recruit students for jobs and internships across various roles." },
    { id: 2, question: "How can I register?", answer: "Use the registration form above to sign up for upcoming drives. Ensure all details are accurate for quick processing." },
    { id: 3, question: "What roles are available?", answer: "Roles include Developer, Designer, Analyst, Tester, and more, tailored to fresh graduates and interns." },
  ];

  const handleRegistration = (data) => {
    setRegistrations([...registrations, data]);
    alert("✅ Registration Successful! We'll contact you soon.");
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO - Updated to purple gradient for emphasis */}
      <section 
        className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-24 px-6 text-center relative overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, ${LIGHT_PURPLE} 0%, transparent 50%), ${PURPLE_GRADIENT}`
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Open Campus Hiring 2025 🚀
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 leading-relaxed"
          >
            Get hired by top companies through SS Infotech's exclusive drives. Your future starts here.
          </motion.p>
          <motion.a 
            href="#register"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Register Now
          </motion.a>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent"
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </section>

      {/* DRIVES */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent"
        >
          Upcoming Drives
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {drives.map((drive) => (
            <DriveCard key={drive.id} drive={drive} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-white">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent"
        >
          What Students Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* REGISTRATION */}
      <div id="register">
        <RegistrationForm onSubmit={handleRegistration} />
      </div>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openFaq === faq.id}
              onToggle={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default OpenCampusHiringPage;
