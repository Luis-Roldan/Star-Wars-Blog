import React, { useState, useEffect, useContext } from "react";
import "../../styles/CardsStyles.css";
import { HeartButton } from "../component/HeartButton.jsx";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetsCard = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.planets.length === 0 && store.error === null) {
      actions.fetchPlanets();
    }
  }, []);

  if (store.error) {
    return (
      <div className="error">Error al cargar los planetas: {store.error}</div>
    );
  }

  return (
    <>
      {store.planets.length !== 0 ? (
        <div className="CardGroups">
          {store.planets.map((planet) => (
            <div key={planet.name} className="CharacterCard">
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
                  <Link to={`/planet/${planet.uid}`}>
                    <button>Learn more!</button>
                  </Link>
                  <HeartButton someItem={planet} />
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
