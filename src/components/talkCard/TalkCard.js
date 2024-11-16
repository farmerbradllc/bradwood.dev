import React from "react";
import "./TalkCard.scss";

export default function TalkCard({ talkDetails }) {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          
          {/* Conditionally render title if it exists */}
          {talkDetails.title && (
            <div className="talk-card-title">{talkDetails.title}</div>
          )}
          
          {/* Conditionally render subtitle if it exists */}
          {talkDetails.subtitle && (
            <p className="talk-card-subtitle">{talkDetails.subtitle}</p>
          )}

          {/* Conditionally render footer buttons */}
          <div className="card-footer-button-div">
            {talkDetails.slides_url && (
              <a
                href={talkDetails.slides_url}
                target="_blank"
                rel="noopener noreferrer"
                className="talk-button"
              >
                Slides
              </a>
            )}
            {talkDetails.event_url && (
              <a
                href={talkDetails.event_url}
                target="_blank"
                rel="noopener noreferrer"
                className="talk-button"
              >
                Event
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}