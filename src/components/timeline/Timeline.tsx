interface Timelineprops {
  id: string;
}

export const Timeline = (props: Timelineprops) => {
  const timelineData = [
    {
      year: 'June 2023 - Present',
      title: 'CloudFit Software, Lynchburg, VA',
      description:
        'I currently work as a Software Engineer at CloudFit Software in Lynchburg, Virginia.',
      img: 'https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/CloudFit_Logo.jpg',
      link: 'https://cloudfitsoftware.com/',
      side: 'left',
    },
    {
      year: 'August 2019 - May 2023',
      title: 'University of Lynchburg, Lynchburg, VA',
      description:
        'I currently work as a Software Engineer at Google headquarters in Mountain View, California.',
      img: 'https://raw.githubusercontent.com/Justin9400/Justin9400.github.io/master/src/images/University-of-Lynchburg_Logo.jpg',
      link: 'https://www.lynchburg.edu/',
      side: 'right',
    },
  ];

  return (
    <section id={props.id} className="container mx-auto">
      <div className="flex flex-col items-center py-10 bg-transparent">
        <h1 className="text-4xl font-bold mb-2 text-white-600">Timeline</h1>

        <div className="relative w-full max-w-3xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>

          {timelineData.map((item, index) => (
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
