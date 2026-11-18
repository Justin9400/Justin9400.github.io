import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { codingProjects } from './data/CodingProjects';
import { uiProjects } from './data/UIProjects';
import { certifications } from './data/Certifications';
import { timelineData } from './data/Timeline';
import type { Project } from './components/models/Project';

const navigation = [
  ['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects'],
  ['Designs', 'designs'], ['Certifications', 'certifications'],
];

const experienceSkills: Record<number, string[]> = {
  1: ['Software Engineering', 'Web Development'],
  2: ['Computer Science', 'Data Science', 'Mathematics'],
};

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <img className="project-image" src={project.image} alt="" loading="lazy" />
      <div>
        <h3><a className="project-link" href={project.url} target="_blank" rel="noreferrer">{project.title} <ArrowUpRight size={16} aria-hidden="true" /></a></h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Technologies and disciplines">
          {project.tech.map(tech => <li key={tech.name}><span className="tech-icon">{tech.icon}</span>{tech.name}</li>)}
        </ul>
      </div>
    </article>
  );
}

export const App = () => (
  <div className="site-shell">
    <a className="skip-link" href="#about">Skip to content</a>
    <header className="sidebar">
      <div>
        <a className="name" href="#top">Justin Kachornvanich</a>
        <div className="intro-row">
          <div className="intro-copy">
            <h1>Software Engineer</h1>
            <p className="intro">I build thoughtful software and digital experiences that help people.</p>
          </div>
          <img className="portrait" src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Headshot.jpg" alt="Justin Kachornvanich" />
        </div>
        <nav aria-label="Main navigation">
          <ul>{navigation.map(([label, id]) => <li key={id}><a href={`#${id}`}><span className="nav-line" />{label}</a></li>)}</ul>
        </nav>
      </div>
      <div className="socials">
        <a href="https://github.com/Justin9400" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={22} /></a>
        <a href="https://www.linkedin.com/in/justin-kachornvanich-30a/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={22} /></a>
        <a href="mailto:justkachorn@gmail.com" aria-label="Email"><Mail size={22} /></a>
      </div>
    </header>
    <main id="top" className="content">
      <section id="about" className="section about">
        <h2>About</h2>
        <p>I’m a software engineer at <a href="https://cloudfitsoftware.com/" target="_blank" rel="noreferrer">CloudFit Software</a> in Lynchburg, Virginia. I enjoy building custom, functional, and scalable web applications that create meaningful value for the people who use them.</p>
        <p>I’m also a developer and co-founder at <strong>ProFront Web Design</strong>, where we work with customers to design, develop, and maintain modern, responsive websites.</p>
        <p>Outside of work, I enjoy exploring AI and automation, tinkering with electronics and 3D printing, and getting outdoors. You might also find me golfing, lifting weights, or practicing Brazilian Jiu Jitsu.</p>
      </section>
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-list">{timelineData.map(item => <article className="experience-row" key={item.id}>
          <p className="date">{item.year}</p><div><h3><a href={item.link} target="_blank" rel="noreferrer">{item.title} <ArrowUpRight size={15} aria-hidden="true" /></a></h3><p>{item.description}</p><ul className="tags" aria-label="Skills">{(experienceSkills[item.id] ?? []).map(skill => <li key={skill}>{skill}</li>)}</ul></div>
        </article>)}</div>
      </section>
      <section id="projects" className="section"><h2>Projects</h2><div className="project-list">{codingProjects.map(project => <ProjectRow key={project.id} project={project} />)}</div></section>
      <section id="designs" className="section"><h2>Designs</h2><div className="project-list">{uiProjects.map(project => <ProjectRow key={project.id} project={project} />)}</div></section>
      <section id="certifications" className="section"><h2>Certifications</h2><div className="cert-list">{certifications.map(cert => <a className="cert" key={cert.id} href={cert.url} target="_blank" rel="noreferrer"><span className="cert-icon">{cert.icon}</span><span>{cert.name} <ArrowUpRight size={15} aria-hidden="true" /></span></a>)}</div></section>
      <footer>Designed and built by Justin Kachornvanich.</footer>
    </main>
  </div>
);
