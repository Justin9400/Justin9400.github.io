import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, Palette, Globe, Camera, Music, Video } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  url?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Full-stack web applications built with modern technologies",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    icon: <Code className="w-6 h-6" />,
    url: "#web-development"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that delight users",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2064",
    icon: <Palette className="w-6 h-6" />,
    url: "#ui-ux-design"
  },
  {
    id: 3,
    title: "Photography",
    description: "Capturing moments and creating visual stories",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=2070",
    icon: <Camera className="w-6 h-6" />,
    url: "#photography"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Strategic online presence and brand growth",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    icon: <Globe className="w-6 h-6" />,
    url: "#digital-marketing"
  },
  {
    id: 5,
    title: "Music Production",
    description: "Creating engaging soundtracks and audio experiences",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2070",
    icon: <Music className="w-6 h-6" />,
    url: "#music-production"
  },
  {
    id: 6,
    title: "Video Editing",
    description: "Professional video editing and motion graphics",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2070",
    icon: <Video className="w-6 h-6" />,
    url: "#video-editing"
  }
];

export const Carousel = () =>{
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleCardClick = (project: Project, index: number) => {
    if (index !== 1) {
      // If clicking a side card, move to that card
      goToSlide((currentIndex + index - 1 + projects.length) % projects.length);
    } else if (project.url) {
      // If clicking the center card, navigate to its URL
      window.location.href = project.url;
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
        <p className="text-xl text-gray-400">Showcasing my creative journey and professional work</p>
      </div>

      <div className="relative">
        <div className="flex justify-center items-center gap-4 mb-12 h-[500px] perspective-1000">
        {getVisibleCards().map((project, index) => (
          <div
          key={project.id}
          onClick={() => handleCardClick(project, index)}
          className={`transform transition-all duration-500 ease-in-out cursor-pointer
            ${index === 0 ? '-translate-x-8 scale-95 opacity-60' : ''}
            ${index === 1 ? 'translate-x-0 scale-100 opacity-100 z-20' : ''}
            ${index === 2 ? 'translate-x-8 scale-95 opacity-60' : ''}
            ${isTransitioning ? 'pointer-events-none' : 'hover:scale-[1.02]'}
          `}
          style={{
            transitionProperty: 'all',
            willChange: 'transform, opacity',
          }}
          >
          <div 
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-[400px] backdrop-blur-sm group"
            style={{
            transform: index !== 1 ? 'rotateY(5deg)' : 'rotateY(0deg)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full">
              {project.icon}
            </div>
            {index === 1 && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">View Project →</span>
              </div>
            )}
            </div>
            <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            </div>
          </div>
          </div>
        ))}
        </div>

        <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
        <ChevronLeft className="w-6 h-6" />
        </button>
        <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
        <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          disabled={isTransitioning}
          className={`w-3 h-3 rounded-full transition-all duration-500 ${
          index === currentIndex
            ? 'bg-white scale-125'
            : 'bg-white/30 hover:bg-white/50 disabled:hover:bg-white/30'
          } disabled:cursor-not-allowed`}
        />
        ))}
      </div>
      </div>
    </div>
  );
}