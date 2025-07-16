import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">OOO.dev</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-indigo-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-indigo-500 transition-colors"
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-indigo-500 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer hover:text-indigo-500 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
  