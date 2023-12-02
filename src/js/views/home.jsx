import React from "react";
import "../../styles/home.css";
import { HeartButton } from "../component/HeartButton.jsx";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <section>
        <h2 className="titles">Characters</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 cardContainer">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://starwars-visualguide.com/assets/img/planets/2.jpg"
                className="card-img-top"
                alt="..."
                onError={(event) => {
                  event.target.src =
                    "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button>Learn more!</button>
                <HeartButton />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button>Learn more!</button>
                <HeartButton />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button>Learn more!</button>
                <HeartButton />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="titles">Planets</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 cardContainer">
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button>Learn more!</button>
                <HeartButton />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button>Learn more!</button>
                <HeartButton />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button>Learn more!</button>
                <HeartButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
