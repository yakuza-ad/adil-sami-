import React from "react";
import { useSelector } from "react-redux";
import Voiture from "./Voiture";

function ListeVoitures() {
    const listevoitures = useSelector((state) => state.voitures);
 
    // console.log(listevoitures);
  return (
    <>
      <h1>Liste des voitures:</h1>
      <div className="row">
        {listevoitures.map((v) => {
          return <Voiture key={v.id} voiture={v} className="col col-md-3" />;
        })}
      </div>
    </>
  );
}

export default ListeVoitures;
