import { Link } from 'react-scroll';

function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with expertise in React, Node.js, and modern web technologies. 
              I love creating intuitive user experiences and building scalable applications.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          
            </p>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-500 transition cursor-pointer"
            >
              See My Projects
            </Link>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend</h3>
              <p className="text-gray-600">React, Vue.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Backend</h3>
              <p className="text-gray-600">Node.js, Python, Express, FastAPI</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Database</h3>
              <p className="text-gray-600">MongoDB, PostgreSQL, Redis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 