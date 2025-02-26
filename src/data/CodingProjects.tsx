import { Project } from '../components/models/Project';

export const codingProjects: Project[] = [
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
