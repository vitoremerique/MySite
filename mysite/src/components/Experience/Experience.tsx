import React from 'react';
import './Experience.css';

type Job = {
  period: string;
  role: string;
  org: string;
  tag?: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

// Edit company names, dates and details here.
const jobs: Job[] = [
  {
    period: 'Present',
    role: 'DevOps Engineer',
    org: 'Financial Market',
    tag: 'Current',
    summary:
      'Platform and delivery automation for financial services, in a regulated environment where availability, security and traceability are mandatory.',
    bullets: [
      'Operate containerized workloads on Kubernetes in AWS, keeping services highly available and scaling with market demand.',
      'Deliver releases through GitOps with Argo, so every change to production is declarative, versioned and auditable.',
      'Build and maintain CI/CD pipelines in Jenkins with automated tests, security checks and controlled rollouts of Docker images.',
      'Administer Linux servers and environments that run the platform, from troubleshooting to hardening.',
      'Support event-driven systems built on Kafka, handling high-throughput message streams between financial services.',
      'Monitor platform health with Grafana dashboards and alerts to detect issues early and speed up incident response.',
    ],
    stack: ['AWS', 'Kubernetes', 'Docker', 'Argo', 'Jenkins', 'CI/CD', 'Kafka', 'Grafana', 'Linux'],
  },
  {
    period: '2025 — present',
    role: 'Graduate Researcher',
    org: 'LaSDPC · ICMC / USP',
    summary:
      'Research in distributed systems and concurrent programming as part of the M.Sc. program.',
    bullets: [],
    stack: ['Distributed Systems', 'Concurrency', 'Performance'],
  },
  {
    period: '2021 — 2024',
    role: 'Scientific Initiation',
    org: 'Federal University of Western Pará',
    summary: 'Four research projects across HPC, infrastructure and applied computing.',
    bullets: [
      'High-Performance Computing — implemented a computational resource monitoring system for the Tapajós HPC cluster.',
      'ML Infrastructure — managed infrastructure for machine learning, focusing on security, performance and collaboration with the dev team.',
      'Computer Vision — generated orthomosaics from aerial images collected by drone.',
      'Computational Modeling — analyzed and tested the Topographical Global Optimization algorithm combined with Newton local search.',
    ],
    stack: ['HPC', 'Monitoring', 'Infrastructure'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-index">02</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="jobs">
          {jobs.map((job) => (
            <article
              key={job.role + job.org}
              className={`job reveal ${job.tag ? 'job--featured' : ''}`}
            >
              <div className="job-meta">
                <span className="job-period mono">{job.period}</span>
                {job.tag && <span className="job-tag mono">{job.tag}</span>}
              </div>

              <div className="job-body">
                <h3 className="job-role">
                  {job.role} <span className="job-org">@ {job.org}</span>
                </h3>
                <p className="job-summary">{job.summary}</p>

                {job.bullets.length > 0 && (
                  <ul className="job-bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}

                <div className="job-stack">
                  {job.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
