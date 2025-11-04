import React from "react";
import DandiyaImage from "../assets/images/deepa.png";

const TicketCard = ({
  title = "SHS Diwali 2025",
  subtitle = "Celebrate music, dance & devotion",
  dates = "Nov 15 2025",
  description = "Joins us vibrant Diwali cultural program hosted by SHS. Purchase your tickets now and be part of festive joy",
  href = "https://www.zeffy.com/en-CA/ticketing/shs-diwali--2025",
}) => {
  return (
    <div className="ticket-card" role="region" aria-label={`${title} ticket card`}>
      <div className="ticket-card__crest" aria-hidden="true">
        <img src={DandiyaImage} alt="Dandiya" className="ticket-card__crest-img" />
      </div>

      <div className="ticket-card__body">
        <h3 className="ticket-card__title">{title}</h3>
        <h6 className="ticket-card__subtitle">{subtitle}</h6>
        <div className="ticket-card__dates">{dates}</div>
        <p className="ticket-card__desc">{description}</p>

        <div className="ticket-card__actions">
          <a
            className="ticket-card__btn"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buy tickets for ${title}`}
          >
            Buy Tickets <span className="ticket-card__chev">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;