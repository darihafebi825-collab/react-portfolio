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
      bgClass: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Django",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      bgClass: "bg-gradient-to-br from-green-600 to-green-700",
    },
    {
      id: 3,
      title: "CSS",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      bgClass: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Tailwind CSS",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      bgClass: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    },
    {
      id: 5,
      title: "Bootstrap",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      bgClass: "bg-gradient-to-br from-violet-600 to-violet-700",
    },
    {
      id: 6,
      title: "Machine Learning",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      bgClass: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
    {
      id: 7,
      title: "Deep Learning",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      bgClass: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
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
        card.style.opacity = "1";
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
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center p-4 md:p-8"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Card Stack - centered on mobile, left-aligned on desktop */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <section
            ref={cardStackRef}
            className="relative w-72 h-96 sm:w-80 sm:h-[26rem] md:w-96 md:h-[28rem] grid place-content-center touch-none select-none"
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
                <div className="flex flex-col items-center justify-center h-full gap-4 sm:gap-6">
                  <div
                    className="p-6 sm:p-8 rounded-3xl backdrop-blur-lg"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      boxShadow:
                        "12px 12px 24px rgba(0,0,0,0.2), inset 4px 4px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    <img
                      src={iconUrl}
                      alt={title}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>

                  <h3 className="text-white text-xl sm:text-2xl font-semibold tracking-wide drop-shadow-lg">
                    {title}
                  </h3>
                </div>
              </article>
            ))}
          </section>
        </div>

        {/* Text Content - full width on mobile, half width on desktop */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-0 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
            My Skills
          </h1>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 sm:mb-8 mx-auto lg:mx-0"></div>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
            I specialize in Python full-stack development with strong hands-on experience
            in Django, modern CSS frameworks like Tailwind and Bootstrap, and advanced
            problem-solving using machine learning and deep learning techniques through
            academic and project-based work.
          </p>

          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-300 shadow-lg">
            <p className="text-xs sm:text-sm text-gray-600">
              <span className="font-semibold">💡 Tip:</span> Drag the cards left or right to explore all skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;