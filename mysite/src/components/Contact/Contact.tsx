import React from 'react';
import './Contact.css';

const contacts = [
  { label: 'Email', value: 'emerique.dev@gmail.com', href: 'mailto:emerique.dev@gmail.com' },
  { label: 'LinkedIn', value: 'in/vitoremerique', href: 'https://www.linkedin.com/in/vitoremerique/' },
  { label: 'GitHub', value: 'vitoremerique', href: 'https://github.com/vitoremerique' },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-index">04</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-grid">
          <p className="contact-pitch reveal">
            Building something that needs to <span>stay up</span>? Let’s talk
            about platforms, pipelines and distributed systems.
          </p>

          <ul className="contact-list reveal">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <span className="contact-label mono">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                  <span className="contact-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="container footer mono">
        <span>© {new Date().getFullYear()} Vitor Emerique</span>
        <span>emerique.dev.br</span>
      </footer>
    </section>
  );
};

export default Contact;
