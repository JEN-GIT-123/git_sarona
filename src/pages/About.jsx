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
          src="data:image/jpeg;base64,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" // 👈 your image in public/profile.png
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
