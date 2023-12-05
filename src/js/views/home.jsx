import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { CharactersCard } from "../component/CharactersCard.jsx";
import { PlanetsCard } from "../component/PlanetsCard.jsx";
import { StarshipsCard } from "../component/StarshipsCard.jsx";
import { HeartButton } from "../component/HeartButton.jsx";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <section>
        <h2 className="titles my-4">Characters</h2>
        <div className="cardContainer d-flex flex-nowrap">
          <CharactersCard />
        </div>
      </section>
      <section>
        <h2 className="titles my-4">Planets</h2>

        <div className="cardContainer d-flex flex-nowrap ">
          <PlanetsCard />
        </div>
      </section>

      <section>
        <h2 className="titles my-4">Starships</h2>

        <div className="cardContainer d-flex flex-nowrap ">
          <StarshipsCard />
        </div>
      </section>
    </div>
  );
};
