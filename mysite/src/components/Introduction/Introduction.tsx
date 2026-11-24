import React from 'react';
import './Introduction.css';
import foto from '../../img/profile.jpeg';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow mono">
            <span className="status-dot" /> DevOps Engineer · Distributed Systems
          </p>

          <h1 className="hero-title">
            Vitor <br />
            <span className="hero-accent">Emerique</span>
          </h1>

          <p className="hero-lead">
            DevOps engineer with experience building and operating reliable
            infrastructure for the financial market — AWS, Kubernetes and Docker on Linux, GitOps with Argo, CI/CD with Jenkins,
            Kafka and Grafana observability
            for systems where uptime and auditability are not optional. Master’s
            student in Distributed Systems at USP / ICMC.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              View experience <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <img src={foto} alt="Vitor Emerique" className="profile-photo" />
          </div>

          <div className="terminal" aria-hidden="true">
            <div className="terminal-bar">
              <i />
              <i />
              <i />
              <span>argocd</span>
            </div>
            <pre className="terminal-body">
              <span className="t-dim">$</span> argocd app sync payments{'\n'}
              <span className="t-ok">✓</span> ci pipeline   <span className="t-dim">passed</span>{'\n'}
              <span className="t-ok">✓</span> k8s rollout   <span className="t-dim">3/3 ready</span>{'\n'}
              <span className="t-ok">✓</span> kafka lag     <span className="t-dim">0</span>{'\n'}
              <span className="t-ok">✓</span> sync status   <span className="t-dim">Healthy</span>{'\n'}
              <span className="t-accent">●</span> grafana       all green
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
