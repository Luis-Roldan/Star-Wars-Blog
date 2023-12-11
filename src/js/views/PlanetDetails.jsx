import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/Details.css";

export const PlanetDetails = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();
  const [planet, setPlanet] = useState({});

  const getPlanet = async () => {
    const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
    const data = await response.json();
    setPlanet(data);
  };

  useEffect(() => {
    getPlanet();
  }, []);

  return (
    <div className="DetailsContainer">
      {Object.keys(planets).length !== 0 ? (
        <div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                  className="img-fluid rounded-start"
                  alt="..."
                  onError={(event) => {
                    event.target.src =
                      "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                  }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {planet.result?.properties?.name}
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus adipisci quibusdam reprehenderit, repellat dolores
                    dicta omnis voluptates magni doloribus inventore soluta
                    dignissimos eius dolor incidunt deserunt iusto aspernatur
                    tempora. Numquam.lorem
                  </p>
                </div>
              </div>
            </div>
          </div>
          <table className="text-light table">
            <thead>
              <tr>
                <th>Climate:</th>
                <th>Diameter:</th>
                <th>Gravity:</th>
                <th>Orbital Period:</th>
                <th>Population:</th>
                <th>Terrain:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{planet.result?.properties?.climate}</td>
                <td>{planet.result?.properties?.diameter}</td>
                <td>{planet.result?.properties?.gravity}</td>
                <td>{planet.result?.properties?.orbital_period}</td>
                <td>{planet.result?.properties?.population}</td>
                <td>{planet.result?.properties?.terrain}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};
