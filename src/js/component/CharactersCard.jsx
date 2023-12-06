import React, { useState, useEffect, useContext } from "react";
import "../../styles/CardsStyles.css";
import { HeartButton } from "../component/HeartButton.jsx";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CharactersCard = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.characters.length === 0 && store.error === null) {
      actions.fetchCharacters();
    }
  }, []);

  if (store.error) {
    return (
      <div className="error">Error al cargar los personajes: {store.error}</div>
    );
  }

  return (
    <>
      {store.characters.length !== 0 ? (
        <div className="CardGroups">
          {store.characters.map((character) => (
            <div key={character.uid} className="CharacterCard">
              <div className="card h-100">
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                  className="card-img-top w-100"
                  alt="..."
                  onError={(event) => {
                    event.target.src =
                      "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <ul>
                    <li>
                      <strong>Gender: </strong>
                      {character && character.details
                        ? JSON.stringify(character.details.gender)
                        : "Cargando..."}{" "}
                    </li>
                    <li>
                      <strong>Hair Color: </strong>
                      {character && character.details
                        ? JSON.stringify(character.details.hair_color)
                        : "Cargando..."}{" "}
                    </li>
                    <li>
                      <strong>Eye Color: </strong>
                      {character && character.details
                        ? JSON.stringify(character.details.eye_color)
                        : "Cargando..."}{" "}
                    </li>
                  </ul>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <Link to={`/character/${character.uid}`}>
                    <button>Learn more!</button>
                  </Link>
                  <HeartButton someItem={character} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
};
