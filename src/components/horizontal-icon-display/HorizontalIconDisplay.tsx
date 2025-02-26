import { Icon } from '../models/Icon';

interface horizontalIconDisplayProps {
  id: string;
  headerText: string;
  certifications: Icon[];
}

export const HorizontalIconDisplay = (props: horizontalIconDisplayProps) => {
  return (
    <section id={props.id} className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          {props.headerText}
        </h2>
        <div className="flex flex-wrap justify-center space-x-8">
          {props.certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-center transition-transform duration-300 m-4"
            >
              <div className="flex justify-center">{cert.icon}</div>
              <p className="mt-2 text-sm text-blue-400">{cert.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
