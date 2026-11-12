// import { legacy_createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import voitureReducer from "../reducers/VoitureReducer";
import { AJOUTER_V, SUPPRIMER_V } from "../actions/VoitureActions";

// const store = legacy_createStore(voitureReducer);

const store = configureStore({
  reducer: voitureReducer,
});

export default store;

// console.log(store.getState());
// store.dispatch({
//   type: AJOUTER_V,
//   payload: {
//     id: "v3",
//     Marque: "FORD",
//     TypeCarburant: "Diesel",
//     PrixLocation: 400,
//     image: "ford.jpg",
//   },
// });
// console.log(store.getState());
// store.dispatch({
//   type: SUPPRIMER_V,
//   payload: "v3",
// });
// console.log(store.getState());
// store.dispatch({
//   type: AJOUTER_V,
//   payload: {
//     id: "v5",
//     Marque: "MITSU",
//     TypeCarburant: "Diesel",
//     PrixLocation: 300,
//     image: "ford.jpg",
//   },
// });
// console.log(store.getState());
