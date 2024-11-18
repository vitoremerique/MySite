import React, { useEffect, useRef } from 'react';
import './ScientificIniciation.css';

const ScientificInitiation: React.FC = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.card');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const topics = [
    {
      title: 'Computational Modeling',
      description: 'He analyzed and tested the Topographical Global Optimization Algorithm to select optimal points, combining it with the Newton local search method.',
    },
    {
      title: 'Computer Vision',
      description: 'He was responsible for generating orthomosaics from aerial images collected by a drone',
    },
    {
      title: 'High-Performance Computing',
      description: 'He was responsible for implementing a computational resource monitoring system for the Tapajós high-performance cluster.',
    },
    {
      title: 'Gestão de Infraestrutura para Aprendizado de Máquina',
      description: 'He managed the infrastructure for machine learning, focusing on security, performance, and collaboration with the development team.',
    }
  ];

  return (
    <section id="scientific" className="scientific-initiation" ref={sectionRef}>
      <h2>Scientific Initiation</h2>
      <div className="cards">
        {topics.map((topic, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              
              <p>{topic.description}</p>
            </div>
            <div className="card-title">
              <p>{topic.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScientificInitiation;
