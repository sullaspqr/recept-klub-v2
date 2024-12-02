import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

export function Home() {
  const [numberOfRecipes, setNumberOfRecipes] = useState();
  console.log(numberOfRecipes)

  useEffect(() => {
    fetch("https://recept-app.fly.dev/api/recipes")
      .then((res) => res.json())
      .then((recipes) => setNumberOfRecipes(recipes.length));
  }, []);

  return (
    <div className="jumbotron">
      <h1>Üdv a recept appban</h1>
      <p>Jelenleg {numberOfRecipes} recept elérhető</p>
      <NavLink to={`/receptek`}>
        <button className="btn btn-primary">
          Tovább <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>
      </NavLink>
    </div>
  );
}

export default Home;