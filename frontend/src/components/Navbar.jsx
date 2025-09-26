import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/training", label: "Training" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
    { path: "/serach-jobs", label: "Jobs" }
  ];

  return (
    <nav className="bg-white text-[#AB1EA9] px-4 sm:px-6 lg:px-8 py-4 border-b-2 border-[#AB1EA9] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-[#AB1EA9]">
          SS Infotech
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className="px-4 py-2 rounded-md transition-all duration-200 text-[#AB1EA9] hover:bg-[#AB1EA9] hover:text-white font-medium border border-transparent hover:border-[#AB1EA9]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md bg-[#AB1EA9] text-white hover:bg-[#8b1a8a] transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="bg-white border-t border-gray-200 px-4 py-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-4 py-3 rounded-md transition-all duration-200 text-[#AB1EA9] hover:bg-[#AB1EA9] hover:text-white font-medium text-left border border-gray-100 hover:border-[#AB1EA9]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;