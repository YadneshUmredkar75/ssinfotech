import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#AB1EA9] text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">SS Infotech</h3>
            <p className="text-white/90 mb-4 leading-relaxed">
              Where innovation meets excellence in the realm of IT solutions. 
              Specializing in software development, training programs, and digital 
              marketing services with presence in Pune and Nagpur.
            </p>
            <div className="flex items-center space-x-2 text-white/80">
              <span>📍</span>
              <p>Park Ramdaspeth, Nagpur</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-white/30 pb-2">Useful Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/90 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/90 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/90 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-white/90 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Training Program
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-white/90 hover:text-white transition-colors duration-200 flex items-center group">
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
              <li className="text-white/90 hover:text-white transition-colors duration-200 cursor-pointer py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all">
                Real Time Project Development
              </li>
              <li className="text-white/90 hover:text-white transition-colors duration-200 cursor-pointer py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all">
                Software Development
              </li>
              <li className="text-white/90 hover:text-white transition-colors duration-200 cursor-pointer py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all">
                Web & App Developments
              </li>
              <li className="text-white/90 hover:text-white transition-colors duration-200 cursor-pointer py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all">
                Digital Marketing
              </li>
              <li className="text-white/90 hover:text-white transition-colors duration-200 cursor-pointer py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all">
                MTS/GRP/FOSTs Training
              </li>
              <li className="text-white/90 hover:text-white transition-colors duration-200 cursor-pointer py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all">
                Compact Hiring Program
              </li>
              <li className="text-white/90 hover:text-white transition-colors duration-200 cursor-pointer py-1 border-l-2 border-transparent hover:border-white hover:pl-2 transition-all">
                Jobs & Career Consultant
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-3">
                <div className="bg-white p-2 rounded-full mr-3">
                  <span className="text-[#AB1EA9]">📞</span>
                </div>
                <h5 className="font-semibold text-white">Phone</h5>
              </div>
              <a href="tel:+912025000000" className="text-white/90 hover:text-white transition-colors text-lg">
                +91 202 500 0000
              </a>
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-3">
                <div className="bg-white p-2 rounded-full mr-3">
                  <span className="text-[#AB1EA9]">✉️</span>
                </div>
                <h5 className="font-semibold text-white">Email</h5>
              </div>
              <a href="mailto:bluefloats@gmail.com" className="text-white/90 hover:text-white transition-colors text-lg">
                bluefloats@gmail.com
              </a>
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-3">
                <div className="bg-white p-2 rounded-full mr-3">
                  <span className="text-[#AB1EA9]">📍</span>
                </div>
                <h5 className="font-semibold text-white">Address</h5>
              </div>
              <p className="text-white/90 text-lg">Park Ramdaspeth, Nagpur</p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h4 className="text-xl font-semibold text-white mb-6 text-center">Find Us On Map</h4>
          <div className="bg-white/10 rounded-lg backdrop-blur-sm p-1 h-64 border border-white/20">
            {/* Google Map Placeholder */}
            <div className="w-full h-full bg-white/5 rounded flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white p-3 rounded-full inline-block mb-3">
                  <span className="text-[#AB1EA9] text-2xl">📍</span>
                </div>
                <p className="text-white font-medium">Google Maps Integration</p>
                <p className="text-sm text-white/80 mt-1">Park Ramdaspeth, Nagpur</p>
                <button className="mt-3 bg-white text-[#AB1EA9] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  View on Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © Copyright SS Infotech, All Rights Reserved
            </div>
            <div className="text-white/80 text-sm">
              Designed by <span className="text-white font-semibold">SS Infotech</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;