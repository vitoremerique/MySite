import React from 'react';
import './AboutMe.css';

const education = [
  {
    period: '2025 — present',
    title: 'M.Sc. in Distributed Systems',
    place: 'University of São Paulo (USP) · ICMC',
    note: 'Member of the Laboratory of Distributed Systems and Concurrent Programming (LaSDPC).',
  },
  {
    period: '2019 — 2024',
    title: 'B.Sc. in Computer Science',
    place: 'Federal University of Western Pará (UFOPA)',
    note: 'Scientific initiation in mathematical modeling, computer vision and high-performance computing.',
  },
];

const highlights = [
  { value: 'DevOps', label: 'in the financial market' },
  { value: 'M.Sc.', label: 'Distributed Systems · USP' },
  { value: '4 yrs', label: 'of research (2021 — 2024)' },
];

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-index">01</span>
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I’m an engineer working where infrastructure meets reliability. In
              the financial market, I automate delivery and operate platforms that
              must stay fast, secure and auditable under real traffic.
            </p>
            <p>
              In parallel, I research distributed systems at USP, which keeps my
              day-to-day DevOps work grounded in how systems actually behave at
              scale — concurrency, fault tolerance and performance.
            </p>

            <dl className="about-stats">
              {highlights.map((h) => (
                <div key={h.label}>
                  <dt>{h.value}</dt>
                  <dd>{h.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ol className="edu-list reveal">
            {education.map((e) => (
              <li key={e.title} className="edu-item">
                <span className="edu-period mono">{e.period}</span>
                <h3>{e.title}</h3>
                <p className="edu-place">{e.place}</p>
                <p className="edu-note">{e.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
