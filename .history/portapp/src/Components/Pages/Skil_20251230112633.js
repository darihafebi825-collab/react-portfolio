"use client";

import React, { useEffect, useRef } from "react";

const Skills = () => {
  const cardStackRef = useRef(null);
  const cardsRef = useRef([]);

  const skills = [
    {
      id: 1,
      title: "Python",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      bgClass: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Django",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      bgClass: "bg-gradient-to-br from-green-600 to-green-700"
    },
    {
      id: 3,
      title: "CSS",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      bgClass: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Tailwind CSS",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      bgClass: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
    {
      id: 5,
      title: "Bootstrap",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      bgClass: "bg-gradient-to-br from-violet-600 to-violet-700"
    },
    {
      id: 6,
      title: "Machine Learning",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      bgClass: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      id: 7,
      title: "Deep Learning",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      bgClass: "bg-gradient-to-br from-pink-500 to-pink-600"
    }
  ];

  useEffect(() => {
    const cardStack = cardStackRef.current;
    if (!cardStack) return;
    cardsRef.current = Array.from(cardStack.querySelectorAll(".card"));

    let isSwiping = false;
    let startX = 0;
    let currentX = 0;

    const updatePositions = () => {
      cardsRef.current.forEach((card, i) => {
        const offset = i + 1;
        card.style.zIndex = `${100 - offset}`;
        card.style.transform = `perspective(700px) translateZ(${-12 * offset}px) translateY(${7 * offset}px)`;
        card.style.opacity = `1`;
      });
    };

    const handleStart = (clientX) => {
      isSwiping = true;
      startX = currentX = clientX;
    };

    const handleMove = (clientX) => {
      if (!isSwiping) return;
      currentX = clientX;
      const deltaX = currentX - startX;
      const card = cardsRef.current[0];
      if (card) {
        card.style.transform = `perspective(700px) translateX(${deltaX}px) rotateY(${deltaX * 0.2}deg)`;
      }
      if (Math.abs(deltaX) > 60) handleEnd();
    };

    const handleEnd = () => {
      if (!isSwiping) return;
      const card = cardsRef.current[0];
      cardsRef.current = [...cardsRef.current.slice(1), card];
      updatePositions();
      isSwiping = false;
    };

    cardStack.addEventListener("pointerdown", (e) => handleStart(e.clientX));
    cardStack.addEventListener("pointermove", (e) => handleMove(e.clientX));
    cardStack.addEventListener("pointerup", handleEnd);

    updatePositions();
  }, []);

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center p-8">
      
      {/* Left side – Card Stack */}
      <div className="w-1/2 flex justify-start pl-12">
        <section
        <section id="skills" className="min-h-screen ...">

          ref={cardStackRef}
          className="relative w-96 h-[28rem] grid place-content-center touch-none select-none"
        >
          {skills.map(({ id, title, iconUrl, bgClass }) => (
            <article
              key={id}
              className={`card absolute inset-4 rounded-3xl cursor-grab ${bgClass}`}
              style={{
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              <div className="flex flex-col items-center justify-center h-full gap-6">
                
                <div
                  className="p-8 rounded-3xl backdrop-blur-lg"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    boxShadow:
                      "12px 12px 24px rgba(0,0,0,0.2), inset 4px 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={iconUrl}
                    alt={title}
                    className="w-24 h-24"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>

                {/* Skill Name */}
                <h3 className="text-white text-2xl font-semibold tracking-wide drop-shadow-lg">
                  {title}
                </h3>

              </div>
            </article>
          ))}
        </section>
      </div>

      {/* Right side – Text */}
      <div className="w-1/2 pr-12">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">My Skills</h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8"></div>

        {/* ✅ Sentence instead of points */}
        <p className="text-2xl text-gray-700 leading-relaxed font-light">
          I specialize in Python full-stack development with strong hands-on experience
          in Django, modern CSS frameworks like Tailwind and Bootstrap, and advanced
          problem-solving using machine learning and deep learning techniques through
          academic and project-based work.
        </p>

        <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-300 shadow-lg">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">💡 Tip:</span> Drag the cards left or right to explore all skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;


