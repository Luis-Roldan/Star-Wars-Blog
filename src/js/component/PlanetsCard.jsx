import React, { useState, useEffect, useContext } from "react";
import "../../styles/CharactersCard.css";
import { HeartButton } from "../component/HeartButton.jsx";
import { Context } from "../store/appContext";

export const PlanetsCard = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.planets.length === 0) {
      actions.fetchPlanets();
    }
  }, [actions, store.planets]);

  if (store.error) {
    return <div>Error al cargar los planetas: {store.error}</div>;
  }

  return (
    <div className="IndividualCard">
      {store.planets.map((planet) => (
        <div key={planet.uid} className="CharacterCard">
          <div className="card h-100">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              className="card-img-top w-100"
              alt="..."
              onError={(event) => {
                event.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <ul>
                <li>
                  <strong>Diameter: </strong>
                  {planet && planet.details
                    ? JSON.stringify(planet.details.diameter)
                    : "Cargando..."}{" "}
                </li>
                <li>
                  <strong>Gravity: </strong>
                  {planet && planet.details
                    ? JSON.stringify(planet.details.gravity)
                    : "Cargando..."}{" "}
                </li>
                <li>
                  <strong>Population: </strong>
                  {planet && planet.details
                    ? JSON.stringify(planet.details.population)
                    : "Cargando..."}{" "}
                </li>
              </ul>
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
