import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-6">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content - SAME as yours */}
          <div className="space-y-8">
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
              Dariha
              <br />
              <span className="text-gray-900">Suresh</span>
            </h1>
            <div className="text-xl md:text-3xl text-gray-700 font-light">
              Full Stack Developer
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Crafting seamless digital experiences from front to back. 
              Passionate about building scalable applications with clean code 
              and innovative solutions.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gray-900 text-white px-8 py-4 text-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 font-semibold"
              >
                View My Projects
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 text-lg hover:bg-gray-900 hover:text-white transition-colors inline-flex items-center gap-2 font-semibold"
              >
                Get Connected
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Right Side - Image with DEBUG */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <img 
                src="/Images/dari.png"
                alt="Dariha Suresh"
                className="w-full h-auto object-contain border-4 border-red-500" // RED BORDER FOR DEBUG
                onError={(e) => {
                  console.log('❌ IMAGE FAILED:', e.target.src);
                  e.target.style.display = 'none';
                }}
                onLoad={() => console.log('✅ IMAGE LOADED!')}
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}
