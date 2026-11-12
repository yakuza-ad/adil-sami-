import React from "react";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";
function Voiture(props) {
  const voiture = props.voiture;
  const naviagte = useNavigate();
  return (
    <>
      <div className="card mb-3 " style={{ maxWidth: "540px", margin: "5px", border: "2px solid gray" }}>
        <img src={logo} className="img-fluid rounded-start" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{voiture.Marque}</h5>
          <p className="card-text">Type De Carburant: {voiture.TypeCarburant}</p>
          <p className="card-text">Prix De Location: {voiture.PrixLocation} DHS</p>
          <button className="btn btn-warning" onClick={() => naviagte("/" + voiture.id)}>
            Details
          </button>
        </div>
      </div>
    </>
  );
}

export default Voiture;
