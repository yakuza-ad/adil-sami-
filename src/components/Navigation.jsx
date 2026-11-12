import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul className="navbar">
      {/* <a href=""></a> */}
      <li>
        <NavLink to="/">Liste voitures</NavLink>
      </li>

      <li>
        <NavLink to="/add">Ajouter Voiture</NavLink>
      </li>

      <li>
        <NavLink to="/delete">Supprimer Voiture</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
