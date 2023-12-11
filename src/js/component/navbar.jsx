import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const favorites = store.favorites;
  console.log(store);

  const handleRemoveFromFavorites = (name) => {
    actions.removeFromFavorites(name);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex ">
      <div className="container-fluid navbarContent">
        <Link to="/">
          <button>
            <img
              src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
              alt="img"
              className="Logo"
            />
          </button>
        </Link>
      </div>
      <div className="dropdown dropstart">
        <button
          className="btn btn-secondary btn-lg dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>

        <ul className="dropdown-menu lg">
          {favorites.length > 0 ? (
            favorites.map((favorite) => (
              <li key={favorite.someItem.name} className="dropdown-item">
                {favorite.someItem.name}
                <i
                  className="fa-solid fa-trash"
                  onClick={() =>
                    handleRemoveFromFavorites(favorite.someItem.name)
                  }
                ></i>
              </li>
            ))
          ) : (
            <li className="dropdown-item">No hay favoritos</li>
          )}
        </ul>
      </div>
    </nav>
  );
};
