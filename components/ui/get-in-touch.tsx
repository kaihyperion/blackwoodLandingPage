"use client"

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export const ProfessionalConnect = () => {
  const [, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactPlatforms = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-7 h-7" />,
      gradient: 'from-blue-600 to-blue-400',
      shadowColor: 'rgba(59, 130, 246, 0.5)',
      link: 'https://linkedin.com/in/yourprofile',
      description: 'Professional Network'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-7 h-7" />,
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      shadowColor: 'rgba(219, 39, 119, 0.5)',
      link: 'https://instagram.com/yourprofile',
      description: 'Visual Stories'
    },
    {
      name: 'Email',
      icon: <Mail className="w-7 h-7" />,
      gradient: 'from-blue-500 to-purple-600',
      shadowColor: 'rgba(147, 51, 234, 0.5)',
      link: 'mailto:contact@yourcompany.com',
      description: 'Direct Contact'
    },
    {
      name: 'Phone',
      icon: <Phone className="w-7 h-7" />,
      gradient: 'from-green-600 to-emerald-500',
      shadowColor: 'rgba(34, 197, 94, 0.5)',
      link: 'tel:+1234567890',
      description: 'Call Us'
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden relative w-full">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect & Collaborate
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Reach out to us through your preferred channel and let's start a conversation
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactPlatforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.link}
              className={`group relative transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-white/20">
                {/* Hover Gradient Effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${platform.shadowColor}, transparent 70%)`,
                    filter: 'blur(40px)'
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${platform.gradient} text-white transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                    {platform.icon}
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-white font-semibold text-lg mb-1 transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-white/60 text-sm transition-colors duration-300 group-hover:text-white/80">
                    {platform.description}
                  </p>
                  
                  {/* Arrow Icon */}
                  <div className="mt-4 flex items-center text-white/60 group-hover:text-white transition-all duration-300">
                    <span className="text-sm font-medium group-hover:translate-x-0 transition-all duration-300">
                      Connect
                    </span>
                    <svg 
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            <span className="relative z-10">Let's Work Together</span>
            <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            
            {/* Button Shimmer */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </button>
        </div>
      </div>

      {/* Mouse Follow Light */}
      <div 
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-[100px] transition-all duration-200 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)',
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      />
    </div>
  );
};

