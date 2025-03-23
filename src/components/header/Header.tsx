export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-center w-16 h-16">
          <img
            src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Logo.jpg"
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-blue-500"
          />
        </div>
        <div className="flex space-x-4">
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#certifications" className="hover:text-blue-400">
            Certifications
          </a>
          <a href="#uiProjects" className="hover:text-blue-400">
            Designs
          </a>
          <a href="#codingProjects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#timeline" className="hover:text-blue-400">
            Timeline
          </a>
        </div>
      </nav>
    </header>
  );
};
