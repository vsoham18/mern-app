import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, isloggedin, openLogin } = useAuth();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          {isloggedin ? (
            <>
              Welcome, <span className="text-indigo-600">{user.userName}</span>
            </>
          ) : (
            <>
              Welcome to <span className="text-indigo-600">MyApp</span>
            </>
          )}
        </h1>

        {/* Sub text */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Learn new skills, explore professional courses, and grow your career
          with high-quality, practical learning resources built for you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {isloggedin ? (
            <>
              <Link
                to="/service"
                className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold 
                hover:bg-indigo-700 transition shadow-md"
              >
                Explore Courses
              </Link>

              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg border border-indigo-600 
                text-indigo-600 font-semibold hover:bg-indigo-50 transition"
              >
                Contact Us
              </Link>
            </>
          ) : (
            <>
              <button
               onClick={openLogin}
                className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold 
                hover:bg-indigo-700 transition shadow-md"
              >
                Get Started
              </button>

              <Link
                to="/about"
                className="px-8 py-3 rounded-lg border border-indigo-600 
                text-indigo-600 font-semibold hover:bg-indigo-50 transition"
              >
                Learn More
              </Link>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Home;
