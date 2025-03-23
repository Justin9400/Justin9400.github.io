import { Project } from '../models/Project';
import { ProjectCard } from '../project-card/ProjectCard';

interface IProjectGridProps {
  id: string;
  headerText: string;
  subHeaderText: string;
  projects: Project[];
}

export const ProjectGrid = (props: IProjectGridProps) => {
  return (
    <div className="sm:py-20" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-8">
          <h2 className="font-bold tracking-tight text-white text-4xl bg-white bg-clip-text text-transparent leading-snug mb-4">
            {props.headerText}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {props.projects.slice(0, 9).map((project, index) => (
            <div
              key={index}
              className="flex justify-center w-full sm:w-1/2 md:w-1/3 p-4"
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-full max-w-xs md:max-w-sm backdrop-blur-sm group mx-auto">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      View Project →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex space-x-2 mt-4">
                    {project.tech.map((tech, index) => (
                      <div key={index}>{tech.icon}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
