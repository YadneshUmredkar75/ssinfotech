// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1E245C] text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">SS Infotech</h3>
            <p className="text-white/90 mb-4 leading-relaxed">
              Where innovation meets excellence in the realm of IT solutions. Specializing in software development,
              training programs, and digital marketing services with presence in Pune and Nagpur.
            </p>
            <div className="flex items-center space-x-2 text-white/80">
              <span aria-hidden="true">📍</span>
              <p>Parijat Ramdaspeth, Nagpur</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-white/30 pb-2">Useful Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center group"
                  aria-label="Home page"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center group"
                  aria-label="About Us page"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center group"
                  aria-label="Gallery page"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center group"
                  aria-label="Training Program page"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Training Program
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center group"
                  aria-label="Courses page"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-white/30 pb-2">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services#real-time"
                  className="text-white/90 hover:text-white transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all block"
                  aria-label="Real Time Project Development service"
                >
                  Real Time Project Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#software"
                  className="text-white/90 hover:text-white transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all block"
                  aria-label="Software Development service"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#web-app"
                  className="text-white/90 hover:text-white transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all block"
                  aria-label="Web & App Development service"
                >
                  Web & App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#digital-marketing"
                  className="text-white/90 hover:text-white transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all block"
                  aria-label="Digital Marketing service"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services#ielts"
                  className="text-white/90 hover:text-white transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all block"
                  aria-label="IELTS / GRE / TOEFL Training service"
                >
                  IELTS / GRE / TOEFL Training
                </Link>
              </li>
              <li>
                <Link
                  to="/services#campus-hiring"
                  className="text-white/90 hover:text-white transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all block"
                  aria-label="Campus Hiring Program service"
                >
                  Campus Hiring Program
                </Link>
              </li>
              <li>
                <Link
                  to="/services#career-consult"
                  className="text-white/90 hover:text-white transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all block"
                  aria-label="Jobs & Career Consultant service"
                >
                  Jobs & Career Consultant
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;