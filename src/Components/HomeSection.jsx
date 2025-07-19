import React, { useState, useEffect } from "react";
import "./home.css";
import robot from "../assets/robot.jpg";
import medias from "../assets/medias.png";
import agros from "../assets/agros.png";
import boxes from "../assets/boxes.png";

const cardsData = [
  { title: "NUAM TECH", description: "", image: robot },
  { title: "NUAM AGROTECH", description: "", image: agros },
  { title: "NUAM STORYBOX", description: "", image: boxes },
  { title: "NUAM MEDIA", description: "", image: medias },
];

const HomeSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".card")) {
      setActiveIndex(null); // Reset all cards if clicked outside
    }
  };

  return (
    <section className="gallery-section" onClick={handleOutsideClick}>
      <div className="gallery">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`card ${
              activeIndex === index
                ? "active"
                : activeIndex !== null
                ? "compressed"
                : ""
            }`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering outside click
              handleCardClick(index);
            }}
          >
            <img src={card.image} alt={card.title} className="card-img" />
            <div className="card-overlay">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;
