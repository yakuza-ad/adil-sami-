import React from "react";
import logo from "../logo.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function DetailsVoitures() {
  const { v1 } = useParams();
  const navigate = useNavigate();
  const voitures = useSelector((state) => state.voitures);
  const voiture = voitures.find((v) => v.id === v1);

  return (
    <div class="card mb-3 " style={{ maxWidth: "540px", margin: "5px", border: "2px solid gray" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={logo} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{voiture.Marque}</h5>
            <p class="card-text">Type De Carburant: {voiture.TypeCarburant}</p>
            <p class="card-text">Prix De Location: {voiture.PrixLocation} DHS</p>
            <p class="card-text">
              <button className="btn btn-warning">Ajouter au panier</button>
            </p>
          </div>
        </div>
      </div>
      <div class="row g-0">
        <div class="col-md-8">
          <button className="btn btn-warning" onClick={() => navigate("/")}>
            Retour à la liste
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsVoitures;
