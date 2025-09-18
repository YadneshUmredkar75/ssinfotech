import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold text-yellow-400">
          MyWebsite
        </Link>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/training"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Training
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
