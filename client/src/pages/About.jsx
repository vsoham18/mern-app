import { useAuth } from "../context/auth"

const About = () => {
  const { user } = useAuth()

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          About Us
        </h2>

        <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
          Empowering learners with practical knowledge, real-world skills, and
          career-focused education.
        </p>

        {/* Content Card */}
        <div className="bg-white shadow-lg rounded-2xl p-10 space-y-8">
          
          <p className="text-gray-700 text-lg leading-relaxed">
            We are committed to delivering <span className="font-semibold text-gray-900">
            high quality, practical, and affordable learning experiences</span> 
            tailored to today’s fast-changing industry demands. Our goal is to
            bridge the gap between theoretical knowledge and real-world application.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our platform emphasizes <span className="font-semibold text-gray-900">
            hands-on learning, project based education, and industry relevant content</span>.
            Each course is carefully designed by experts to help learners build
            confidence, sharpen skills, and advance their careers.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you are a beginner starting your learning journey or a
            professional aiming to upskill, we provide the right tools, guidance,
            and support to help you succeed at every stage.
          </p>

          {/* Highlight Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Practical Learning
              </h4>
              <p className="text-gray-600">
                Learn by doing with real world projects and examples.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Expert Guidance
              </h4>
              <p className="text-gray-600">
                Courses crafted by industry professionals and mentors.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Career Focused
              </h4>
              <p className="text-gray-600">
                Skills that matter for jobs, growth, and real impact.
              </p>
            </div>
          </div>

          {/* User Greeting (Optional) */}
          {user && (
            <p className="text-center text-gray-500 pt-6">
              Glad to have you with us, <span className="font-medium text-gray-800">
              {user.username}
              </span> 👋
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
