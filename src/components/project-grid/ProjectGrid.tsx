import './ProjectGrid.css';

interface IProjectGridProps {
    uiProjects: uiProjects[];
}

export const ProjectGrid = (props: IProjectGridProps) => {
  return (
    <div className="project-grid">
      {props.uiProjects.map((project, index) => (
        <ProjectCard
          key={index}
          id={project.title}
          headerText={'My Portfolio'}
          subHeaderText={''}
          project={project}
        />
      ))}
    </div>
  );
};
