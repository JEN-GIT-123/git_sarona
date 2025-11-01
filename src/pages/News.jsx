export default function News() {
  const newsList = [
    {
      id: 1,
      title: "Apple Unveils New MacBook Pro M4",
      date: "October 30, 2025",
      img: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg",
      description:
        "Apple has officially announced its latest MacBook Pro featuring the new M4 chip — offering faster performance and better battery life than ever before.",
    },
    {
      id: 2,
      title: "AI Revolution in 2025",
      date: "October 28, 2025",
      img: "https://cdn.pixabay.com/photo/2020/11/05/07/45/artificial-intelligence-5710628_960_720.jpg",
      description:
        "Artificial Intelligence continues to transform industries worldwide. From automation to creativity, AI is reshaping how we live and work.",
    },
    {
      id: 3,
      title: "Tesla Launches CyberSUV",
      date: "October 25, 2025",
      img: "https://cdn.pixabay.com/photo/2020/08/12/18/41/tesla-5480773_960_720.jpg",
      description:
        "Tesla has expanded its electric lineup with the all-new CyberSUV, combining futuristic design, off-road capability, and advanced autopilot features.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-900 via-red-700 to-red-500 text-white px-8 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-10">Latest News</h1>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {newsList.map((news) => (
          <div
            key={news.id}
            className="bg-white text-red-900 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img src={news.img} alt={news.title} className="w-full h-52 object-cover" />
            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">{news.title}</h2>
              <p className="text-sm text-gray-600">{news.date}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{news.description}</p>
              <button className="mt-3 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-colors self-start">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,192L60,186.7C120,181,240,171,360,149.3C480,128,600,96,720,80C840,64,960,64,1080,80C1200,96,1320,128,1380,144L1440,160V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
