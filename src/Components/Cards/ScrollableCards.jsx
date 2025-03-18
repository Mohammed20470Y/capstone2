import React from "react";
import { Link } from "react-router-dom"; // Import Link component for navigation
import "./ScrollableCards.css";
import rhinoplastyImage from "../../assets/Rhinoplasty.png";

const ScrollableCards = () => {
  const cardData = [
    {
      id: 1,
      image: rhinoplastyImage,
      title: "Rhinoplasty Surgery",
      description: "Get your appointment now!",
      link: "/schedule/1", // Unique dynamic link
      availability: ["Monday 10 AM - 2 PM", "Wednesday 1 PM - 4 PM"], // Example schedule
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SR...",
      title: "Card 2",
      description: "Description for card 2",
      link: "/schedule/2",
      availability: ["Tuesday 9 AM - 12 PM", "Friday 3 PM - 6 PM"],
    },
    // Add more doctors or services as needed
  ];

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {cardData.map((card) => (
          <div key={card.id} className="card">
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="card-image"
            />
            <div className="card-text">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {/* Add the Link button */}
              {card.link && (
                <Link to={`/schedule/${card.id}`}>
                  <button className="card-button">Schedule</button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableCards;
