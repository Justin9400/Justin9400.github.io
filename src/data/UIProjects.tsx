import { Project } from '../components/models/Project';

export const uiProjects: Project[] = [
  {
    id: 1,
    title: 'Mobile App Design',
    description:
      'Modern fitness tracking app with intuitive user interface and smooth interactions.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
    url: 'https://github.com/Justin9400/Trading-Signal-Indicator',
    tech: [
      {
        icon: (
          <img
            src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Figma.jpg"
            alt="Mobile App Design"
            className="w-8 h-6"
          />
        ),
        name: 'Mobile App Design',
      },
    ],
  },
  {
    id: 2,
    title: 'Dashboard Design',
    description:
      'Analytics dashboard with data visualization and customizable widgets.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
    url: 'https://github.com/Justin9400/Trading-Signal-Indicator',
    tech: [
      {
        icon: (
          <img
            src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Figma.jpg"
            alt="Dashboard Design"
            className="w-8 h-6"
          />
        ),
        name: 'Dashboard Design',
      },
    ],
  },
  {
    id: 3,
    title: 'Fitness App Design',
    description:
      'Fitness tracking app with workout plans, progress tracking, and social sharing.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
    url: 'https://github.com/Justin9400/Trading-Signal-Indicator',
    tech: [
      {
        icon: (
          <img
            src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Figma.jpg"
            alt="Dashboard Design"
            className="w-8 h-6"
          />
        ),
        name: 'Dashboard Design',
      },
    ],
  },
];
