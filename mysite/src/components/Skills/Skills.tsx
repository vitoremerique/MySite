import React, { useEffect, useRef } from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrame: number;
    let position = 0;

    const speed = 0.5; // ajuste a velocidade do efeito parallax

    const animate = () => {
      if (trackRef.current) {
        position -= speed;
        trackRef.current.style.transform = `translateX(${position}px)`;

        // reinicia quando sai da tela (efeito looping)
        if (Math.abs(position) > trackRef.current.scrollWidth / 2) {
          position = 0;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const skills = [
    "Java",
    "Spring Boot",
    "HTML",
    "CSS",
    "React",
    "Docker",
    "Typescript",
  ];

  // duplicar itens para efeito infinito
  const loopedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="parallax-wrapper">
        <div className="parallax-track" ref={trackRef}>
          {loopedSkills.map((skill, index) => (
            <div key={index} className="parallax-item">
              <img
                src={`${process.env.PUBLIC_URL}/icons/${skill.toLowerCase()}.png`}
                alt={skill}
              />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
