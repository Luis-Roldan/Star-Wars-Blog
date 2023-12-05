import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const HeartButton = (someItem) => {
  const [heartColor, setHeartColor] = useState("black");
  const { store, actions } = useContext(Context);
  const favorites = store.favorites;

  const handleClickFavorite = () => {
    setHeartColor((prevColor) => (prevColor === "red" ? "black" : "red"));
  };

  const handleAddToFavorites = (item) => {
    if (!favorites.some((i) => i.someItem.uid === item.someItem.uid))
      actions.addToFavorites(item);
    else {
      alert("Ya se encuentra en la lista de favoritos");
    }
  };

  return (
    <button
      className="heartButton"
      onClick={() => {
        handleClickFavorite();
        handleAddToFavorites(someItem);
      }}
    >
      <i
        className={`fa-${heartColor == "red" ? "solid" : "regular"} fa-heart`}
        style={{ color: heartColor }}
      ></i>
    </button>
  );
};
