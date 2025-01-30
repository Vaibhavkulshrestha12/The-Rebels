import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaDiscord } from 'react-icons/fa';
import wordmark from "./assets/wordmark.svg";
import symbol from "./assets/symbol.svg";

function App() {
  const [email, setEmail] = useState('');
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      window.location.href = `mailto:vaibhavkulshrestha55@gmail.com?subject=New Rebel Newsletter Signup&body=New signup from: ${email}`;
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const TopWolfIcon = () => (
    <div className="relative">
      <img
        src={wordmark}
        alt="Top Wolf Icon"
        className="w-[150px] h-[105px] sm:w-[180px] sm:h-[126px] md:w-[500px] md:h-[350px]"
      />
    </div>
  );

  const CenterWolfIcon = () => (
    <div className="relative group">
      <div className={`relative ${glitchEffect ? 'animate-glitch' : ''}`}>
        <img
          src={symbol}
          alt="Center Wolf Icon"
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );

  const socialLinks = [
    { Icon: FaInstagram, url: "https://www.instagram.com/therebel.org.in?igsh=MWxobHZ3aXpibXZrag==" },
    { Icon: FaTwitter, url: "https://x.com/therebel_org" },
    { Icon: FaFacebook, url: "https://www.facebook.com/profile.php?id=61572483818317" },
    { Icon: FaDiscord, url: "https://discord.gg/rQsfQxz6ev" }
  ];

  return (
    <div className="min-h-screen bg-black text-[#EAE2D3] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(12px) contrast(150%)',
        }}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
       
        <div className="hidden md:block absolute -top-20 -left-20 z-10">
          <TopWolfIcon />
        </div>
        
        <div className="mb-2 sm:mb-4 md:mb-12">
          <CenterWolfIcon />
        </div>

        
        <div className="md:hidden mb-2 sm:mb-4">
          <TopWolfIcon />
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 md:mb-12 tracking-wider relative text-[#E6E6E6] text-center">
          <span className="absolute -inset-0.5 bg-white blur opacity-10"></span>
          <span className="relative">COMING SOON</span>
        </h1>
        
        <div className="w-full max-w-md mb-6 px-4 sm:px-0">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="JOIN THE REBELLION"
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-[#EAE2D3]/20 focus:border-[#EAE2D3] outline-none text-[#EAE2D3] placeholder-[#EAE2D3]/50 transition-colors duration-300"
              required
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-4 sm:px-6 bg-[#EAE2D3] hover:bg-[#EAE2D3]/80 text-black transition-colors duration-300 text-sm sm:text-base"
            >
              {submitted ? 'SENT!' : 'SUBMIT'}
            </button>
          </form>
        </div>
        
        <div className="flex space-x-4 sm:space-x-6 mb-16">
          {socialLinks.map(({ Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
            >
              <Icon size={20} className="sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
        
        <p className="absolute bottom-8 text-base sm:text-xl tracking-widest opacity-70 text-center px-4">
          DARE TO BE DIFFERENT
        </p>
      </div>
    </div>
  );
}

export default App;