import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  // icon: React.ReactNode;
  url?: string;
  tech: { icon: React.ReactNode; name: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Trading Signal Indicator',
    description: 'Trading signal indicator for stock market analysis',
    image:
      'https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Trading-Signal-Indicator.jpg',
    url: 'https://github.com/Justin9400/Trading-Signal-Indicator',
    tech: [
      {
        icon: (
          <img
            src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Python_Logo.jpg"
            alt="Python"
            className="w-6 h-6"
          />
        ),
        name: 'Python',
      },
    ],
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that delight users',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2064',
    url: '#ui-ux-design',
    tech: [],
  },
  {
    id: 3,
    title: 'Photography',
    description: 'Capturing moments and creating visual stories',
    image:
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=2070',
    url: '#photography',
    tech: [],
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Strategic online presence and brand growth',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    url: '#digital-marketing',
    tech: [],
  },
  {
    id: 5,
    title: 'Music Production',
    description: 'Creating engaging soundtracks and audio experiences',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2070',
    url: '#music-production',
    tech: [],
  },
  {
    id: 6,
    title: 'Video Editing',
    description: 'Professional video editing and motion graphics',
    image:
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2070',
    url: '#video-editing',
    tech: [],
  },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const handleCardClick = (project: Project, index: number) => {
    if (index !== 1) {
      goToSlide((currentIndex + index - 1 + projects.length) % projects.length);
    } else if (project.url) {
      window.open(project.url, '_blank');
    }
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      cards.push(projects[index]);
    }
    return cards;
  };

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">My Portfolio</h1>
          <p className="text-xl text-gray-400">
            Showcasing my creative journey and professional work
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center gap-4 mb-12 h-[500px] perspective-1000">
            {getVisibleCards().map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleCardClick(project, index)}
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
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-[400px] backdrop-blur-sm group"
                  style={{
                    transform: index !== 1 ? 'rotateY(5deg)' : 'rotateY(0deg)',
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
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
