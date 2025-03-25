import { Icon } from '../components/models/Icon';

export const certifications: Icon[] = [
  {
    id: 1,
    icon: (
      <img
        src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Sec+.jpg"
        alt="CompTIA Security+"
        className="h-20"
      />
    ),
    url: 'https://www.credly.com/badges/0b197a0d-825d-41e8-b343-d1ac7c27ac1b/linked_in_profile',
    name: 'CompTIA Security+',
  },
  {
    id: 2,
    icon: (
      <img
        src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/AZ-900.jpg"
        alt="AZ-900"
        className="h-20"
      />
    ),
    url: 'https://learn.microsoft.com/en-us/users/justinkachornvanich-6272/credentials/6340f16d132cfd69?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    name: 'Microsoft AZ-900',
  },
];
