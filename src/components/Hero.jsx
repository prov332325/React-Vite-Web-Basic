import { Link } from 'react-scroll';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 pt-20 px-6">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">Hi, I'm OOO 👋</h2>
      <p className="text-lg text-gray-600 mb-6">
        I build full-stack web & AI-powered apps that feel natural to use.
      </p>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-500 transition cursor-pointer"
      >
        View My Work
      </Link>
    </section>
  );
}

export default Hero;
  