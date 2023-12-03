import React from "react";
import "../../styles/CharactersCard.css";
import { HeartButton } from "./HeartButton.jsx";

export const StarshipsCard = () => {
  return (
    <div className="col CharacterCard">
      <div className="card h-100">
        <img
          src="https://starwars-visualguide.com/assets/img/planets/2.jpg"
          className="card-img-top"
          alt="..."
          onError={(event) => {
            event.target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button>Learn more!</button>
          <HeartButton />
        </div>
      </div>
    </div>
  );
};
