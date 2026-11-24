import React from 'react';
import './Skills.css';

const groups = [
  {
    title: 'DevOps & Cloud',
    cmd: 'ops',
    items: ['AWS', 'Kubernetes', 'Docker', 'Argo', 'Jenkins', 'CI/CD', 'Linux'],
  },
  {
    title: 'Streaming & Observability',
    cmd: 'obs',
    items: ['Kafka', 'Grafana', 'Monitoring', 'Alerting'],
  },
  {
    title: 'Systems',
    cmd: 'sys',
    items: ['Distributed Systems', 'Concurrency', 'HPC Clusters'],
  },
  {
    title: 'Development',
    cmd: 'dev',
    items: ['Java', 'Spring Boot', 'TypeScript', 'React', 'HTML', 'CSS'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-index">03</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skill-grid">
          {groups.map((g) => (
            <div key={g.title} className="skill-card reveal">
              <p className="skill-cmd mono">
                <span>$</span> ls ./{g.cmd}
              </p>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((i) => (
                  <li key={i} className="chip">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
