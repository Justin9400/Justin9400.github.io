import { Project } from '../components/models/Project';

export const uiProjects: Project[] = [
  {
    id: 1,
    title: 'Waypoint',
    description:
      'AI Travel Planner that generates personalized itineraries based on user preferences and makes real-time suggestions.',
    image:
      'https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/WaypointAi.jpg',
    url: 'https://www.figma.com/design/FfL1CN5PSvIYcYLijzwARX/Waypoint?node-id=0-1&p=f&t=hHyYj6px6pblrdyO-0',
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
  // {
  //   id: 2,
  //   title: 'Dashboard Design',
  //   description:
  //     'Analytics dashboard with data visualization and customizable widgets.',
  //   image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
  //   url: 'https://github.com/Justin9400/Trading-Signal-Indicator',
  //   tech: [
  //     {
  //       icon: (
  //         <img
  //           src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Figma.jpg"
  //           alt="Dashboard Design"
  //           className="w-8 h-6"
  //         />
  //       ),
  //       name: 'Dashboard Design',
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: 'Fitness App Design',
  //   description:
  //     'Fitness tracking app with workout plans, progress tracking, and social sharing.',
  //   image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
  //   url: 'https://github.com/Justin9400/Trading-Signal-Indicator',
  //   tech: [
  //     {
  //       icon: (
  //         <img
  //           src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Figma.jpg"
  //           alt="Dashboard Design"
  //           className="w-8 h-6"
  //         />
  //       ),
  //       name: 'Dashboard Design',
  //     },
  //   ],
  // },
];
