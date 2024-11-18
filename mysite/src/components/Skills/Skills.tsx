import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll('.skill');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const skills = ['Java', 'Spring Boot', 'HTML', 'CSS', 'React', 'Docker','Typescript'];
  

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={`/icons/${skill.toLowerCase()}.png`} alt={skill} />


            
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
