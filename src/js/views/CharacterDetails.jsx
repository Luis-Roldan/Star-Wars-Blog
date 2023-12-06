import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/Details.css";

export const CharacterDetails = () => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();
  const [character, setCharacter] = useState({});

  const getCharacter = async () => {
    const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
    const data = await response.json();
    setCharacter(data);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div className="DetailsContainer">
      {Object.keys(character).length !== 0 ? (
        <div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
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
                    {character.result?.properties?.name}
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
                <th>Gender:</th>
                <th>Birth year:</th>
                <th>Eye Color:</th>
                <th>Height:</th>
                <th>Skin Color:</th>
                <th>Mass:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{character.result?.properties?.gender}</td>
                <td>{character.result?.properties?.birth_year}</td>
                <td>{character.result?.properties?.eye_color}</td>
                <td>{character.result?.properties?.height}</td>
                <td>{character.result?.properties?.skin_color}</td>
                <td>{character.result?.properties?.mass}</td>
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
