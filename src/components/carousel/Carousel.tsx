import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../models/Project';

interface CarouselProps {
  id: string;
  headerText: string;
  subHeaderText: string;
  projects: Project[];
}

export const Carousel = (props: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === props.projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? props.projects.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => () => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const handleCardClick = (project: Project, index: number) => () => {
    if (index !== 1) {
      goToSlide(
        (currentIndex + index - 1 + props.projects.length) %
          props.projects.length,
      );
    } else if (project.url) {
      window.open(project.url, '_blank');
    }
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + props.projects.length) % props.projects.length;
      cards.push(props.projects[index]);
    }
    return cards;
  };

  return (
    <section id={props.id} className="container mx-auto">
      <div className="min-h-screen bg-transparent text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">{props.headerText}</h1>
            <p className="text-xl text-gray-400">{props.subHeaderText}</p>
          </div>

          <div className="relative">
            <div className="flex justify-center items-center gap-4 mb-12 h-[500px] perspective-1000">
              {getVisibleCards().map((project, index) => (
                <div
                  key={project.id}
                  onClick={handleCardClick(project, index)}
                  className={`transform transition-all duration-1500 ease-in-out cursor-pointer
                ${index === 0 ? '-translate-x-8 scale-95 opacity-60' : ''}
                ${index === 1 ? 'translate-x-0 scale-100 opacity-100 z-20' : ''}
                ${index === 2 ? 'translate-x-8 scale-95 opacity-60' : ''}
                hover:scale-[1.02]`}
                  style={{
                    transitionProperty: 'all',
                    willChange: 'transform, opacity',
                  }}
                >
                  <div
                    className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-[300px] md:w-[400px] backdrop-blur-sm group"
                    style={{
                      transform:
                        index !== 1 ? 'rotateY(5deg)' : 'rotateY(0deg)',
                      transition: 'all 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      />
                      {index === 1 && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <span className="text-white text-lg font-semibold">
                            View Project →
                          </span>
                        </div>
                      )}
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

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {props.projects.map((_, index) => (
              <button
                key={index}
                onClick={goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
