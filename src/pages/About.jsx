export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white flex flex-col items-center justify-center px-6 py-20">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-6 text-center">About Me</h1>
      <p className="text-lg max-w-2xl text-center mb-12 text-blue-100">
        Hi, I’m <span className="font-semibold text-yellow-300">CHEV JEN</span> 👋 — 
        a passionate developer who loves building modern web and mobile apps.  
        I focus on creating clean, fast, and user-friendly interfaces using React, Flutter, and modern technologies.
      </p>

      {/* Profile + Info Card */}
      <div className="bg-white text-blue-900 rounded-3xl shadow-xl p-8 w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-10 transition-transform hover:scale-[1.02]">
        {/* Left: Profile Image */}
        <img
          src="/profile.png" // 👈 your image in public/profile.png
          alt="Profile"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-900"
        />

        {/* Right: Info */}
        <div>
          <h2 className="text-3xl font-bold mb-3">CHEV JEN</h2>
          <h3 className="text-xl text-blue-600 mb-4">Programmer & Web Developer</h3>
          <p className="text-gray-700 leading-relaxed">
            I specialize in developing clean UIs, responsive web apps, and smooth user experiences.
            With knowledge in React, Node.js, Flutter, and MongoDB, I create full-stack solutions
            that help businesses grow and connect with their users.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="border border-blue-700 text-blue-700 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-white transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,256L80,229.3C160,203,320,149,480,154.7C640,160,800,224,960,229.3C1120,235,1280,181,1360,154.7L1440,128V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
