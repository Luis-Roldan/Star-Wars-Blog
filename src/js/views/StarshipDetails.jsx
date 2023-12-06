import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/Details.css";

export const StarshipDetails = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();
  const [starship, setStarship] = useState({});

  const getStarship = async () => {
    const response = await fetch(`https://www.swapi.tech/api/starships/${uid}`);
    const data = await response.json();
    setStarship(data);
  };

  useEffect(() => {
    getStarship();
  }, []);

  return (
    <div className="DetailsContainer">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
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
                {starship.result?.properties?.name}
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
            <th>Cargo Capacity:</th>
            <th>Consumables:</th>
            <th>crew:</th>
            <th>Hyperdrive Rating:</th>
            <th>Length:</th>
            <th>Passengers:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{starship.result?.properties?.cargo_capacity}</td>
            <td>{starship.result?.properties?.consumables}</td>
            <td>{starship.result?.properties?.crew}</td>
            <td>{starship.result?.properties?.hyperdrive_rating}</td>
            <td>{starship.result?.properties?.length}</td>
            <td>{starship.result?.properties?.passengers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
