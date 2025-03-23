import { Timeline } from './components/timeline/Timeline';
import { codingProjects } from './data/CodingProjects';
import { uiProjects } from './data/UIProjects';
import { HorizontalIconDisplay } from './components/horizontal-icon-display/HorizontalIconDisplay';
import { certifications } from './data/Certifications';
import { frontendSkills } from './data/FrontEndSkills';
import { backendSkills } from './data/BlackEndSkills';
import { toolsSkills } from './data/ToolsSkills';
import { ProjectGrid } from './components/project-grid/ProjectGrid';
import { About } from './about/About';
import { Home } from './components/home/Home';

export const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
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

      <Home/>

      <About/>

      <section id="skills" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Technical Skills</h2>

          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Frontend
          </h3>
          <div className="flex items-center space-x-3 overflow-x-auto p-4 justify-center">
            {frontendSkills.map((skill, index) => (
              <div className="flex flex-col items-center">
                <div
                  key={index}
                  className="w-24 h-24 flex items-center justify-center bg-gray-800 shadow-lg rounded-lg p-4"
                >
                  {skill.icon}
                </div>
                <p className="mt-2 text-lg font-semibold text-white text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Backend</h3>
          <div className="flex items-center space-x-3 overflow-x-auto p-4 justify-center">
            {backendSkills.map((skill, index) => (
              <div className="flex flex-col items-center">
                <div
                  key={index}
                  className="w-24 h-24 flex items-center justify-center bg-gray-800 shadow-lg rounded-lg p-4"
                >
                  {skill.icon}
                </div>
                <p className="mt-2 text-lg font-semibold text-white text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Tools</h3>
          <div className="flex items-center space-x-3 overflow-x-auto p-4 justify-center">
            {toolsSkills.map((tool, index) => (
              <div className="flex flex-col items-center">
                <div
                  key={index}
                  className="w-24 h-24 flex items-center justify-center bg-gray-800 shadow-lg rounded-lg p-4"
                >
                  {tool.icon}
                </div>
                <p className="mt-2 text-lg font-semibold text-white text-center">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HorizontalIconDisplay
        id={'certifications'}
        headerText={'Certifications'}
        certifications={certifications}
      />

      <ProjectGrid
        id={'uiProjects'}
        projects={uiProjects}
        headerText={'UI Portfolio'}
        subHeaderText={''}
      />

      <ProjectGrid
        id={'uiProjects'}
        projects={codingProjects}
        headerText={'Coding Portfolio'}
        subHeaderText={''}
      />

      <Timeline id={'timeline'} />

      <footer id="contact" className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-400">
          <p>© 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
