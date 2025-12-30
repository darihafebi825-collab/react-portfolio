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
    let animationFrameId = null;

    const getDuration = () => 300;
    const getActiveCard = () => cardsRef.current[0];

    const updatePositions = () => {
      cardsRef.current.forEach((card, i) => {
        const offset = i + 1;
        card.style.zIndex = `${100 - offset}`;
        card.style.transform = `perspective(700px) translateZ(${-12 * offset}px) translateY(${7 * offset}px) translateX(0px) rotateY(0deg)`;
        card.style.opacity = `1`;
      });
    };

    const applySwipeStyles = (deltaX) => {
      const card = getActiveCard();
      if (!card) return;
      const rotate = deltaX * 0.2;
      const opacity = 1 - Math.min(Math.abs(deltaX) / 100, 1) * 0.75;
      card.style.transform = `perspective(700px) translateZ(-12px) translateY(7px) translateX(${deltaX}px) rotateY(${rotate}deg)`;
      card.style.opacity = `${opacity}`;
    };

    const handleStart = (clientX) => {
      if (isSwiping) return;
      isSwiping = true;
      startX = currentX = clientX;
      const card = getActiveCard();
      card && (card.style.transition = "none");
    };

    const handleMove = (clientX) => {
      if (!isSwiping) return;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        currentX = clientX;
        const deltaX = currentX - startX;
        applySwipeStyles(deltaX);
        if (Math.abs(deltaX) > 50) handleEnd();
      });
    };

    const handleEnd = () => {
      if (!isSwiping) return;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      const deltaX = currentX - startX;
      const threshold = 50;
      const duration = getDuration();
      const card = getActiveCard();

      if (card) {
        card.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;

        if (Math.abs(deltaX) > threshold) {
          const direction = Math.sign(deltaX);
          card.style.transform = `perspective(700px) translateZ(-12px) translateY(7px) translateX(${direction * 300}px) rotateY(${direction * 20}deg)`;

          setTimeout(() => {
            card.style.transform = `perspective(700px) translateZ(-12px) translateY(7px) translateX(${direction * 300}px) rotateY(${-direction * 20}deg)`;
          }, duration / 2);

          setTimeout(() => {
            cardsRef.current = [...cardsRef.current.slice(1), card];
            updatePositions();
          }, duration);
        } else {
          applySwipeStyles(0);
        }
      }

      isSwiping = false;
      startX = currentX = 0;
    };

    cardStack.addEventListener("pointerdown", (e) => handleStart(e.clientX));
    cardStack.addEventListener("pointermove", (e) => handleMove(e.clientX));
    cardStack.addEventListener("pointerup", handleEnd);

    updatePositions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center p-8">
      {/* Left side - Card Stack */}
      <div className="w-1/2 flex justify-start pl-12">
        <section
          ref={cardStackRef}
          className="relative w-96 h-[28rem] grid place-content-center touch-none select-none"
        >
          {skills.map(({ id, title, iconUrl, bgClass }) => (
            <article
              key={id}
              className={`card absolute inset-4 rounded-3xl cursor-grab transition-transform ease-in-out ${bgClass}`}
              style={{
                border: '3px solid rgba(255, 255, 255, 0.3)',
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.3),
                  0 10px 30px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                `
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div 
                  className="transform hover:scale-110 transition-transform rounded-3xl p-8"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    boxShadow: `
                      12px 12px 24px rgba(0, 0, 0, 0.2),
                      -12px -12px 24px rgba(255, 255, 255, 0.1),
                      inset 4px 4px 8px rgba(0, 0, 0, 0.1),
                      inset -4px -4px 8px rgba(255, 255, 255, 0.1)
                    `,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <img 
                    src={iconUrl} 
                    alt={title}
                    className="w-24 h-24 filter drop-shadow-2xl"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      {/* Right side - Text Information */}
      <div className="w-1/2 pr-12">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">My Skills</h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8"></div>
        
        <p className="text-2xl text-gray-700 mb-8 leading-relaxed font-light">
          Technical expertise gained through academic projects and professional training
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-xl text-gray-700">Python Full Stack Development</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <p className="text-xl text-gray-700">Network Systems Projects</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <p className="text-xl text-gray-700">College Academic Projects</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <p className="text-xl text-gray-700">Machine Learning & Deep Learning</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-300 shadow-lg">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">💡 Tip:</span> Drag the cards left or right to explore all skills!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

