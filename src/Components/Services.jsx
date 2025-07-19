import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './service.css';
import gp1 from '../assets/gp1.jpg';
// import brandImg from '../assets/brand.png';
// import softwareImg from '../assets/software.png';

const services = [
  {
    title: 'Web Development & App Development',
    description: 'Fast, responsive websites with modern tech.',
    image: gp1,
    color: '#f72585',
  },
  {
    title: 'Digital Marketiong and Search Engine Optimization',
    description: 'Craft stunning brand visuals and strategies.',
    image: gp1,
    color: '#7209b7',
  },
  {
    title: 'Custom Software',
    description: 'Tailored software for growth and scalability.',
    image: gp1,
    color: '#3a0ca3',
  },
];

const TiltCard = ({ children }) => {
  const tiltRef = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 1000,
      glare: true,
      'max-glare': 0.3,
      perspective: 1000,
    });
  }, []);

  return (
    <div ref={tiltRef} className="tilt-card">
      {children}
    </div>
  );
};

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">Our <span>Services</span></h2>
      <div className="services-container">
        {services.map((service, i) => (
          <TiltCard key={i}>
            <div className="service-card" style={{ borderColor: service.color }}>
              <img src={service.image} alt={service.title} className="service-image" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
