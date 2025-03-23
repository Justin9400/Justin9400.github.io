import { Project } from '../models/Project';

interface IProjectCardProps {
  id: string;
  headerText: string;
  subHeaderText: string;
  project: Project;
}

export const ProjectCard = (props: IProjectCardProps) => {
  return (
    <a
      href={props.project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center"
    >
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-full max-w-xs md:max-w-sm backdrop-blur-sm group mx-auto">
        <div className="relative h-64 overflow-hidden cursor-pointer">
          <img
            src={props.project.image}
            alt={props.project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">
              View Project →
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{props.project.title}</h3>
          <p className="text-gray-400">{props.project.description}</p>
          <div className="flex space-x-2 mt-4">
            {props.project.tech.map((tech, index) => (
              <div key={index}>{tech.icon}</div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};
