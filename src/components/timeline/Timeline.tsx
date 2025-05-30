import { TimelineData } from '../models/TimelineData';

interface ITimelineprops {
  id: string;
  timelineData: TimelineData[];
}

export const Timeline = (props: ITimelineprops) => {
  return (
    <section id={props.id} className="container mx-auto">
      <div className="flex flex-col items-center py-10 bg-transparent">
        <h1 className="text-4xl font-bold mb-2 text-white-600">Timeline</h1>

        <div className="relative w-full max-w-3xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>

          {props.timelineData.map((item, index) => (
            <div
              key={index}
              className={`mb-16 flex flex-col md:flex-row ${item.side === 'left' ? 'md:justify-start' : 'md:justify-end'} items-center w-full relative px-8`}
            >
              <div className="w-full md:w-1/2 px-12">
                {item.side === 'left' && (
                  <div className="text-right">
                    <h3 className="text-lg font-bold text-white-600">
                      {item.year}
                    </h3>
                    <h2 className="text-xl font-bold text-blue-400">
                      {item.title}
                    </h2>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                )}
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-gray-300 z-10 absolute left-1/2 transform -translate-x-1/2 hover:scale-110 transition-transform"
              >
                <img src={item.img} alt={item.title} className="w-10 h-10" />
              </a>

              <div className="w-full md:w-1/2 px-12">
                {item.side === 'right' && (
                  <div>
                    <h3 className="text-lg font-bold text-white-600">
                      {item.year}
                    </h3>
                    <h2 className="text-xl font-bold text-blue-400">
                      {item.title}
                    </h2>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
