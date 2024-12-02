import React from "react";
import "./App.css";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { RecipeList } from "./RecipeList";
import { RecipeCreate } from "./RecipeCreate";
import { RecipeEdit } from "./RecipeEdit";
import { RecipeSingle } from "./RecipeSingle";


function App() {
  return (
    <Router>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary mb-3">
        <div className="" id="navbarNav">
          <ul className="navbar-nav lead font-weight-bold">
            <li className="nav-item">
              <NavLink to={`/`}>
                <span className="nav-link">
                  <img width="60px" src={`https://recept-app.fly.dev/static/assets/logo.png`} alt="" />
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/receptek`} activeclassname="active" exact>
                <span className="nav-link pt-4">Receptek</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/uj-recept`} activeclassname="active">
                <span className="nav-link pt-4">Új recept</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "140px" }}>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/receptek" exact element={<RecipeList/>}></Route>
        <Route path="/uj-recept" exact element={<RecipeCreate/>}></Route>
        <Route path="/recept-szerkesztes/:recipeSlug" exact element={<RecipeEdit/>}></Route>
        <Route path="/recept/:recipeSlug" exact element={<RecipeSingle/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;