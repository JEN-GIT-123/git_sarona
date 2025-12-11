
// AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  const team = [
    { emoji: '🐰', name: 'Maya', role: 'Design Lead' },
    { emoji: '🦊', name: 'Leo', role: 'Dev Wizard' },
    { emoji: '🐱', name: 'Chloe', role: 'UX Fairy' },
    { emoji: '🐶', name: 'Max', role: 'Code Chef' }
  ];

  const features = [
    { icon: '✨', text: 'Adorable Designs' },
    { icon: '🎨', text: 'Creative Solutions' },
    { icon: '💖', text: 'Made with Love' },
    { icon: '🚀', text: 'Fast & Fun' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 font-sans">
      
      {/* Header */}
      <header className="text-center py-8 px-4">
        <div className="inline-block mb-4 animate-bounce">
          <span className="text-5xl">🎀</span>
        </div>
        <h1 className="text-4xl font-bold text-pink-500 mb-2">
          Hello! We're Cute Team
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Making the internet a more adorable place, one pixel at a time
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-100 mb-8">
            <div className="text-6xl mb-4">🌸</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We started as a small group of friends who believed websites should make you smile. 
              Now we create delightful digital experiences that bring joy to users around the world.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow border border-pink-100 hover:border-pink-200"
              >
                <div className="text-4xl mb-3">{member.emoji}</div>
                <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                <p className="text-pink-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-6 text-center border border-pink-100"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="font-medium text-gray-700">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-pink-400 to-pink-500 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to make something cute?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Let's create something wonderful together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-500 font-bold py-3 px-8 rounded-full hover:bg-pink-50 transition-colors flex items-center justify-center gap-2">
                <span>💌</span>
                Say Hello
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                <span>🎨</span>
                See Our Work
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-4 text-gray-600 mt-8">
        <div className="flex justify-center gap-4 text-2xl mb-4">
          <span className="animate-pulse">💕</span>
          <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>✨</span>
          <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>🎀</span>
        </div>
        <p>Made with 💖 by Cute Team © {new Date().getFullYear()}</p>
      </footer>

    </div>
  );
};

export default AboutPage;
