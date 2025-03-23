import { Github, Linkedin, Mail } from 'lucide-react';

export const Home = () => {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-32 mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Justin Kachornvanich
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Software Engineer at CloudFit Software
        </p>
        <img
          src="https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/Headshot.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-blue-500"
        />
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/Justin9400"
            className="text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-kachornvanich-30a/"
            className="text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:justkachorn@gmail.com"
            className="text-blue-400 hover:text-blue-300"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};
