import { Project } from '../models/Project';

interface IProjectCardProps {
  id: string;
  headerText: string;
  subHeaderText: string;
  project: Project;
}

export const ProjectCard = (props: IProjectCardProps) => {
  const handleCardClick = (project: Project) => () => {
    window.open(project.url, '_blank');
  };

  return (
    // <section id={props.id} className="container mx-auto">
    <div className="min-h-screen bg-transparent text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{props.headerText}</h1>
          <p className="text-xl text-gray-400">{props.subHeaderText}</p>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center gap-4 mb-12 h-[500px] perspective-1000">
            <div
              key={props.project.id}
              onClick={handleCardClick(props.project)}
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-[300px] md:w-[400px] backdrop-blur-sm group">
                <div className="relative h-64 overflow-hidden">
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
                  <h3 className="text-xl font-semibold mb-2">
                    {props.project.title}
                  </h3>
                  <p className="text-gray-400">{props.project.description}</p>
                  <div className="flex space-x-2 mt-4">
                    {props.project.tech.map((tech, index) => (
                      <div key={index}>{tech.icon}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
};
