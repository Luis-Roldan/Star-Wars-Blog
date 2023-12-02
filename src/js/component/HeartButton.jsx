import React, { useState } from "react";

export const HeartButton = () => {
  const [heartColor, setHeartColor] = useState("black");

  const handleClickFavorite = () => {
    setHeartColor((prevColor) => (prevColor === "red" ? "black" : "red"));
  };

  return (
    <button className="heartButton" onClick={handleClickFavorite}>
      <i
        className={`fa-${heartColor == "red" ? "solid" : "regular"} fa-heart`}
        style={{ color: heartColor }}
      ></i>
    </button>
    // <button
    //   onClick={handleClickFavorite}
    //   style={{ backgroundColor: "transparent", border: "none" }}
    // >
    //   <FontAwesomeIcon icon={faHeart} style={{ color: heartColor }} />
    // </button>
  );
};
