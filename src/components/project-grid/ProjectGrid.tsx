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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{props.headerText}</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {props.projects.slice(0, 9).map((project, index) => (
            <ProjectCard
              key={index}
              id={project.id.toString()}
              project={project}
              headerText={props.headerText}
              subHeaderText={props.subHeaderText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
