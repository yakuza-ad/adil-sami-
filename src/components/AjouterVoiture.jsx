import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterVoitureAction } from "../actions/VoitureActions";
import { useNavigate } from "react-router-dom";

function AjouterVoiture() {
  const [id, setId] = useState("");
  const [marque, setMarque] = useState("");
  const [typeCarburant, setTypeCarburant] = useState("Diesel");
  const [prixLocation, setPrixLocation] = useState(0);
  const [image, setImage] = useState("0");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newVoiture = {
      id: id,
      Marque: marque,
      TypeCarburant: typeCarburant,
      PrixLocation: prixLocation,
      image: image,
    };
    dispatch(ajouterVoitureAction(newVoiture));
    navigate("/");
  };

  return (
    <div>
      <h1>Ajouter une Nouvelle Voiture</h1>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label htmlFor="">ID:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </p>
        <p>
          <label htmlFor="">MARQUE:</label>
          <input type="text" value={marque} onChange={(e) => setMarque(e.target.value)} />
        </p>
        <p>
          <label htmlFor="">TYPE CARBURANT:</label>
          <input type="radio" name="carburant" value={"Diesel"} checked={typeCarburant === "Diesel"} onChange={(e) => setTypeCarburant(e.target.value)} />
          Diesel
          <input type="radio" name="carburant" value={"Essence"} checked={typeCarburant === "Essence"} onChange={(e) => setTypeCarburant(e.target.value)} />
          Essence
        </p>
        <p>
          <label htmlFor="">PRIX DE LOCATION:</label>
          <input type="number" value={prixLocation} onChange={(e) => setPrixLocation(e.target.value)} />
        </p>
        <p>
          <label htmlFor="">Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0].name)} accept="image/png, image/jpg, image/svg" />
        </p>
        <p>
          <input type="submit" value="Ajouter"></input>
        </p>
      </form>
    </div>
  );
}

export default AjouterVoiture;
