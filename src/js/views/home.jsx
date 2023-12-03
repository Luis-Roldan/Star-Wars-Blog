import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { CharactersCard } from "../component/CharactersCard.jsx";
import { PlanetsCard } from "../component/PlanetsCard.jsx";
import { HeartButton } from "../component/HeartButton.jsx";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <section>
        <h2 className="titles my-4">Characters</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 cardContainer d-flex flex-nowrap ">
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
          <CharactersCard />
        </div>
      </section>
      <section>
        <h2 className="titles my-4">Planets</h2>

        <div className="row row-cols-1 row-cols-md-3 g-4 cardContainer d-flex flex-nowrap ">
          <PlanetsCard />
          <PlanetsCard />
          <PlanetsCard />
          <PlanetsCard />
          <PlanetsCard />
          <PlanetsCard />
        </div>
      </section>
    </div>
  );
};
