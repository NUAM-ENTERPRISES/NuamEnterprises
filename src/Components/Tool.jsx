import React from 'react';
import './tool.css';
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';

const services = [
  {
    icon: <FaReact />,
    title: 'Frontend Development',
    description: 'We craft responsive and stunning UI using React, Tailwind, and more.',
  },
  {
    icon: <FaNodeJs />,
    title: 'Backend APIs',
    description: 'Robust and scalable backend using Node.js, Express, and RESTful APIs.',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Design',
    description: 'Optimized NoSQL/SQL database solutions using MongoDB, MySQL, PostgreSQL.',
  },
  {
    icon: <FaCode />,
    title: 'Custom Software',
    description: 'Tailored solutions in automation, AI integration, and system design.',
  },
];

const Tool = () => {
  return (
    <section className="tech-tools-main">
      <div className="tech-tools-bg"></div>

      <div className="tech-tools-header">
        <h2>
          Our <span>Technolgy's</span>
        </h2>
        <p>
          Elevating your digital presence with powerful design and technology.
        </p>
      </div>

      <div className="tech-tools-list">
        {services.map((tool, index) => (
          <div key={index} className="tool-box">
            <div className="tool-icon">{tool.icon}</div>
            <div className="tool-name">{tool.title}</div>
            <div className="tool-desc">{tool.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tool;
