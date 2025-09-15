import React, { useState, useEffect } from "react";
import robot from "../assets/robot.jpg";
import medias from "../assets/medias.png";
import agros from "../assets/agros.png";
import boxes from "../assets/boxes.png";

const images = {
  robot,
  medias,
  agros,
  boxes,
};

const cardsData = [
  { title: "NUAM TECH", image: images.robot },
  { title: "NUAM AGROTECH", image: images.agros },
  { title: "NUAM STORYBOX", image: images.boxes },
  { title: "NUAM MEDIA", image: images.medias },
];

const HomeSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleCardClick = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null); // Toggle off if same card is clicked
    } else {
      setClickedIndex(index); // Set clicked card
    }
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".card")) {
      setActiveIndex(null);
      setClickedIndex(null); // Reset clicked state
    }
  };

  return (
    <>
      <style>{`
        :root {
          --background: #000;
          --highlight: #f72585; /* Pink highlight */
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .gallery-section {
          background: var(--background);
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1500px;
        }

        .gallery {
          display: flex;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .card {
          flex: 1;
          position: relative;
          margin: 0;
          border-radius: 1rem;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease, filter 0.3s ease;
          background: var(--background);
          transform-style: preserve-3d;
          will-change: transform;
        }

        /* Step effect on desktop */
        .gallery .card:nth-child(1),
        .gallery .card:nth-child(4) {
          --shift: 80px;
          transform: translateY(var(--shift));
        }

        .gallery .card:nth-child(2),
        .gallery .card:nth-child(3) {
          --shift: -20px;
          transform: translateY(var(--shift));
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease, filter 0.3s ease;
        }

        /* Card content overlay */
        .card-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          text-align: center;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          color: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(247, 37, 133, 0.4);
          transition: all 0.3s ease;
          opacity: 0.9;
        }

        .card-overlay h2 {
          font-size: 1.8rem;
          margin-bottom: 8px;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .card-overlay p {
          font-size: 1rem;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        /* Enhanced hover effect */
        .card:hover,
        .card.clicked {
          transform: translateY(var(--shift)) scale(1.05) translateZ(60px);
          z-index: 2;
          box-shadow: 0 0 30px rgba(247, 37, 133, 0.5);
        }

        .card:hover .card-img,
        .card.clicked .card-img {
          transform: scale(1.08);
          filter: brightness(1.1) saturate(1.2);
        }

        .card:hover .card-overlay,
        .card.clicked .card-overlay {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(12px);
          box-shadow: 0 0 25px rgba(247, 37, 133, 0.6);
          transform: translate(-50%, -50%) scale(1.05);
        }

        .card:hover .card-overlay h2,
        .card.clicked .card-overlay h2 {
          color: var(--highlight);
          text-shadow: 0 0 10px rgba(247, 37, 133, 0.5);
        }

        /* Shimmer effect */
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(247, 37, 133, 0.1) 50%, transparent 70%);
          transform: translateX(-100%) skewX(25deg);
          transition: transform 0.8s ease;
          z-index: 1;
          pointer-events: none;
        }
        
        .card:hover::before,
        .card.clicked::before {
          transform: translateX(200%) skewX(25deg);
        }

        /* Glowing border on hover */
        .card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 1rem;
          border: 2px solid transparent;
          background: linear-gradient(45deg, var(--highlight), transparent, var(--highlight)) border-box;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: subtract;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .card:hover::after,
        .card.clicked::after {
          opacity: 0.6;
        }

        /* Active bulge */
        .card.active {
          flex: 1.4;
          transform: translateY(var(--shift)) scale(1.15) translateZ(120px);
          z-index: 3;
          box-shadow: 0 0 50px rgba(247, 37, 133, 0.8);
        }

        .card.active .card-img {
          transform: scale(1.1);
          filter: brightness(1.2) saturate(1.3);
        }

        .card.active .card-overlay {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(15px);
          box-shadow: 0 0 35px rgba(247, 37, 133, 0.8);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .card.active .card-overlay h2 {
          color: var(--highlight);
          text-shadow: 0 0 15px rgba(247, 37, 133, 0.7);
        }

        /* When hovering, make other cards compressed */
        .gallery:hover .card:not(:hover):not(.active) {
          flex: 0.8;
          transform: translateY(var(--shift)) scale(0.95);
          opacity: 0.8;
          filter: brightness(0.7);
        }

        .gallery:hover .card:not(:hover):not(.active) .card-overlay {
          opacity: 0.6;
        }

        /* Pulsing effect for active and hover cards */
        .card.active::after,
        .card:hover::after,
        .card.clicked::after {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .gallery {
            flex-direction: row;
            height: 55vh;
            gap: 0.5rem;
            padding: 0 1rem;
            overflow-x: auto;
          }

          .card {
            flex: 1;
            height: 55vh;
            border-radius: 20px;
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                        box-shadow 0.4s ease;
            touch-action: manipulation;
            will-change: transform, box-shadow;
          }

          /* Tap bulge animation */
          .card:active {
            animation: bulge 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes bulge {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 transparent;
            }
            50% {
              transform: scale(1.15);
              box-shadow: 0 0 40px var(--highlight);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 transparent;
            }
          }

          .card-img {
            border-radius: 20px;
            transition: transform 0.4s ease;
            object-fit: cover;
          }

          .card-overlay {
            width: 85%;
            padding: 10px;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(6px);
            border-radius: 12px;
            transition: background 0.3s ease, transform 0.3s ease;
          }

          .card-overlay h2 {
            font-size: 8px;
            transition: font-size 0.3s ease;
          }

          .card-overlay p {
            font-size: 0.8rem;
          }

          /* Mobile hover effects */
          .card:hover .card-overlay h2 {
            font-size: 10px;
          }
        }
      `}</style>

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
              } ${clickedIndex === index ? "clicked" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => {
                e.stopPropagation();
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
    </>
  );
};

export default HomeSection;