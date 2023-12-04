import React, { useState, useEffect, useContext } from "react";
import "../../styles/CharactersCard.css";
import { HeartButton } from "../component/HeartButton.jsx";
import { Context } from "../store/appContext";

export const CharactersCard = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.characters.length === 0) {
      actions.fetchCharacters();
    }
  }, [actions, store.characters]);

  if (store.error) {
    return <div>Error al cargar los personajes: {store.error}</div>;
  }

  return (
    <div>
      {store.characters.map((character) => (
        <div key={character.uid} className="col CharacterCard">
          <div className="card h-100">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
              className="card-img-top"
              alt="..."
              onError={(event) => {
                event.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">
                {character.details?.properties || "No description available"}
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button>Learn more!</button>
              <HeartButton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
