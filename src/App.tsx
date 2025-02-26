import { Github, Linkedin, Mail } from 'lucide-react';
import { Carousel } from './components/carousel/Carousel';
import { Timeline } from './components/timeline/Timeline';
import { codingProjects } from './data/CodingProjects';
import { uiProjects } from './data/UIProjects';
import { HorizontalIconDisplay } from './components/horizontal-icon-display/HorizontalIconDisplay';
import { certifications } from './data/Certifications';

function App() {
  const frontendSkills = [
    {
      icon: (
        <img
          src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/React_Logo.jpg"
          alt="React"
          className="h-16"
        />
      ),
      name: 'React',
    },
    {
      icon: (
        <img
          src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/TypeScript_Logo.jpg"
          alt="TypeScript"
          className="h-16"
        />
      ),
      name: 'TypeScript',
    },
    {
      icon: (
        <img
          src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/HTML_Logo.jpg"
          alt="HTML"
          className="h-16"
        />
      ),
      name: 'HTML',
    },
    {
      icon: (
        <img
          src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/CSS_Logo.jpg"
          alt="CSS"
          className="h-16"
        />
      ),
      name: 'CSS',
    },
  ];

  const backendSkills = [
    {
      icon: (
        <img
          src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/C-Sharp.jpg"
          alt="C#"
          className="h-16"
        />
      ),
      name: 'C#',
    },
    {
      icon: (
        <img
          src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/SQL_Logo.jpg"
          alt="SQL"
          className="h-16"
        />
      ),
      name: 'SQL',
    },
    {
      icon: (
        <img
          src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Python_Logo.jpg"
          alt="Python"
          className="h-16"
        />
      ),
      name: 'Python',
    },
  ];

  // Duplicate the icons to create a seamless infinite scroll
  // const techIcons = [
  //   {
  //     icon: (
  //       <img
  //         src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/React_Logo.jpg"
  //         alt="React"
  //         className="h-16"
  //       />
  //     ),
  //     name: 'React',
  //   },
  //   {
  //     icon: (
  //       <img
  //         src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/TypeScript_Logo.jpg"
  //         alt="TypeScript"
  //         className="h-16"
  //       />
  //     ),
  //     name: 'TypeScript',
  //   },
  //   {
  //     icon: (
  //       <img
  //         src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/C-Sharp.jpg"
  //         alt="C#"
  //         className="h-16"
  //       />
  //     ),
  //     name: 'C#',
  //   },
  //   {
  //     icon: (
  //       <img
  //         src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/SQL_Logo.jpg"
  //         alt="SQL"
  //         className="h-16"
  //       />
  //     ),
  //     name: 'SQL',
  //   },
  //   {
  //     icon: (
  //       <img
  //         src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Python_Logo.jpg"
  //         alt="Python"
  //         className="h-16"
  //       />
  //     ),
  //     name: 'Python',
  //   },
  //   {
  //     icon: (
  //       <img
  //         src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/HTML_Logo.jpg"
  //         alt="HTML"
  //         className="h-16"
  //       />
  //     ),
  //     name: 'HTML',
  //   },
  //   {
  //     icon: (
  //       <img
  //         src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/CSS_Logo.jpg"
  //         alt="CSS"
  //         className="h-16"
  //       />
  //     ),
  //     name: 'CSS',
  //   },
  //   // {
  //   //   icon: (
  //   //     <img
  //   //       src="React_Logo.jpg"
  //   //       alt="API"
  //   //       className="h-16"
  //   //     />
  //   //   ),
  //   //   name: 'API',
  //   // },
  //   // {
  //   //   icon: (
  //   //     <img
  //   //       src="React_Logo.jpg"
  //   //       alt="REST"
  //   //       className="h-16"
  //   //     />
  //   //   ),
  //   //   name: 'REST',
  //   // },
  // ];

  // Duplicate the array to create seamless scrolling
  // const scrollingTechIcons = [...techIcons, ...techIcons];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Justin Kachornvanich</div>
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

      <section
        id="home"
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
            src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Headshot.jpg"
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

      <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-xl text-gray-300 mb-4">
            I am a recent graduate of the University of Lynchburg, where I
            double majored in Computer Science and Data Science, earning a
            Bachelor of Science degree, along with a minor in Mathematics.
          </p>
          <p className="text-xl text-gray-300 mb-4">
            During my academic journey, I developed a deep understanding of
            algorithms, programming languages, and data manipulation techniques.
            Through various projects and internships, I gained hands-on
            experience in developing software solutions and extracting valuable
            insights from complex datasets. My double major in Computer Science
            and Data Science has equipped me with a unique skill set that
            combines technical proficiency with analytical thinking.
          </p>
          <p className="text-xl text-gray-300 mb-4">
            I am a software engineer with at CloudFit Software in Lynchburg,
            Virginia who is passionate about helping others through building
            software solutions. I have experience in building aesthetic web
            applications using modern technologies and enjoy solving complex
            problems. Please feel free to reach out to me with any
            opportunities, networking inquiries, or to learn more about my
            experiences. I look forward to connecting and discovering how we can
            create positive outcomes together in the exciting world of
            technology and data.
          </p>
        </div>
      </section>

      {/* <section id="tech-stack" className="container mx-auto px-4 py-8">
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
                    className="flex-shrink-0 text-center transition-transform duration-300"
                  >
                    <div>{tech.icon}</div>
                    <p className="mt-2 text-sm text-blue-400">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="skills" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
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

      <HorizontalIconDisplay
        id={'certifications'}
        headerText={'Certifications'}
        certifications={certifications}
      />

      <Carousel
        id={'uiProjects'}
        projects={uiProjects}
        headerText={'UI/UX Designs'}
        subHeaderText={''}
      />

      <Carousel
        id={'codingProjects'}
        projects={codingProjects}
        headerText={'My Portfolio'}
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
}

export default App;
