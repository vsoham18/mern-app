import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

const Footer = () => {
  const { openLogin, openRegister } = useAuth();
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            MyApp
          </h2>
          <p className="text-sm text-gray-400 leading-snug">
            Learn practical skills and grow your career with industry-focused courses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-2">
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
            <li><Link to="/service" className="hover:text-indigo-400">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-2">
            Support
          </h3>
          <ul className="space-y-1 text-sm">
            <li><button onClick={() =>  openLogin()} className="hover:text-indigo-400">Login</button></li>
            <li><button onClick={() =>  openRegister()} className="hover:text-indigo-400">Register</button></li>
            <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-2">
            Contact
          </h3>
          <p className="text-sm text-gray-400 leading-snug">
            support@myapp.com <br />
            +91 98765 43210
          </p>
        </div>
      </div>

      {/* Bottom Bar (very compact) */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© {new Date().getFullYear()} MyApp</p>
          <p className="mt-1 sm:mt-0">
            Built with ❤️ by Soham Ghosh
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
