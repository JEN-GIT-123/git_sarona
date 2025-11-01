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
          src="data:image/png;base64,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" // 👈 your image in public/profile.png
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
