import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Terminal,
  Github,
  Linkedin,
  Mail,
  Figma,
  Palette,
  Layers,
  Cpu,
  Cloud,
  Box,
  Boxes,
  Webhook,
  Wrench,
  Zap,
  Puzzle,
} from 'lucide-react';
import { Carousel } from './components/carousel/Carousel';
import { Timeline } from './components/timeline/Timeline';

function App() {
  const frontendSkills = [
    { name: 'React', icon: <Layout className="w-6 h-6" /> },
    { name: 'TypeScript', icon: <Code2 className="w-6 h-6" /> },
    { name: 'HTML/CSS', icon: <Globe className="w-6 h-6" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <Server className="w-6 h-6" /> },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" /> },
    { name: 'Python', icon: <Terminal className="w-6 h-6" /> },
  ];

  // Duplicate the icons to create a seamless infinite scroll
  const techIcons = [
    { icon: <Layout className="w-6 h-6" />, name: 'React' },
    { icon: <Code2 className="w-6 h-6" />, name: 'TypeScript' },
    { icon: <Server className="w-6 h-6" />, name: 'Node.js' },
    { icon: <Database className="w-6 h-6" />, name: 'PostgreSQL' },
    { icon: <Globe className="w-6 h-6" />, name: 'Web Dev' },
    { icon: <Terminal className="w-6 h-6" />, name: 'CLI' },
    { icon: <Cpu className="w-6 h-6" />, name: 'API' },
    { icon: <Cloud className="w-6 h-6" />, name: 'Cloud' },
    { icon: <Box className="w-6 h-6" />, name: 'Docker' },
    { icon: <Boxes className="w-6 h-6" />, name: 'Microservices' },
    { icon: <Webhook className="w-6 h-6" />, name: 'GraphQL' },
    { icon: <Wrench className="w-6 h-6" />, name: 'DevOps' },
    { icon: <Zap className="w-6 h-6" />, name: 'Redis' },
    { icon: <Puzzle className="w-6 h-6" />, name: 'REST' },
  ];

  // Duplicate the array to create seamless scrolling
  const scrollingTechIcons = [...techIcons, ...techIcons];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Justin Kachornvanich</div>
          <div className="flex space-x-4">
            <a href="#hero" className="hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#tech-stack" className="hover:text-blue-400">
              Tech Stack
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
            <a href="#designs" className="hover:text-blue-400">
              Designs
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="container mx-auto px-4 py-16 md:py-32 mt-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Justin Kachornvanich
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Software Engineer at CloudFit Software
          </p>
          <img
            src="src\images\Headshot.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-blue-500"
          />
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Justin9400"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/justin-kachornvanich-30a/"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:justkachorn@gmail.com"
              className="text-blue-400 hover:text-blue-300"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-300 mb-4">
            I am a passionate Full Stack Developer with experience in building
            web applications using modern technologies. I enjoy solving complex
            problems and creating user-friendly interfaces.
          </p>
          <p className="text-xl text-gray-300">
            My journey in the tech world started with a curiosity for how things
            work, and it has grown into a fulfilling career. I am always eager
            to learn new skills and take on new challenges.
          </p>
        </div>
      </section>

      {/* Technology Carousel */}
      <section id="tech-stack" className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-4">
            Technology Stack
          </h2>
          <div className="overflow-hidden">
            <div className="flex space-x-8 py-2">
              <div className="flex space-x-8 animate-scroll">
                {scrollingTechIcons.map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 text-center hover:scale-110 transition-transform duration-300"
                  >
                    <div className="bg-gray-700 p-3 rounded-lg">
                      {tech.icon}
                    </div>
                    <p className="mt-2 text-sm text-blue-400">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Frontend Technologies
              </h3>
              <div className="space-y-6">
                {frontendSkills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-4">
                    {skill.icon}
                    <span className="text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Backend Technologies
              </h3>
              <div className="space-y-6">
                {backendSkills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-4">
                    {skill.icon}
                    <span className="text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section id="designs" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            UI/UX Designs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Design Card 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
                  alt="Design 1"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Figma className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Palette className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xl font-semibold">Mobile App Design</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Modern fitness tracking app with intuitive user interface and
                  smooth interactions.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                    Figma
                  </span>
                  <span className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                    UI/UX
                  </span>
                </div>
              </div>
            </div>

            {/* Design Card 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
                  alt="Design 2"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Layers className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Palette className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xl font-semibold">Dashboard Design</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Analytics dashboard with data visualization and customizable
                  widgets.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                    Wireframes
                  </span>
                  <span className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                    Prototyping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Carousel />

      <Timeline />

      {/* Footer */}
      <footer id="contact" className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-400">
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
