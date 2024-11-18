import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me using any of the methods below:</p>
      <div className="contact-methods">
        <div className="contact-item">
          <img src="icons/email.png" alt="Email" />
          <a href="mailto:emerique.dev@gmail.com">emerique.dev@gmail.com</a>
        </div>
        <div className="contact-item">
          <img src="/icons/linkedin.png" alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/vitoremerique/" target="_blank" rel="noreferrer">
            vitoremerique
          </a>
        </div>
        <div className="contact-item">
          <img src="/icons/github.png" alt="GitHub" />
          <a href="https://github.com/vitoremerique" target="_blank" rel="noreferrer">
            VitorEmerique
          </a>
        </div>
        
      </div>
      
    </section>
  );
};

export default Contact;
