import { AJOUTER_V, LISTE_V, MODIFIER_V, SUPPRIMER_V } from "../actions/VoitureActions";

const initialState = {
  voitures: [
    {
      id: "v1",
      Marque: "Dacia_Logan",
      TypeCarburant: "Diesel",
      PrixLocation: 200,
      image: "dacia1.jpg",
    },
    {
      id: "v2",
      Marque: "Renault_Megane",
      TypeCarburant: "Diesel",
      PrixLocation: 300,
      image: "megane.jpg",
    },
  ],
  filtre: "marque",
};
export default function voitureReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case AJOUTER_V:
      newState = {
        ...state,
        voitures: [...state.voitures, action.payload],
      };
      break;
    case SUPPRIMER_V:
      newState = {
        ...state,
        voitures: state.voitures.filter((v) => v.id !== action.payload),
      };
      break;
    case MODIFIER_V:
      newState = {
        ...state,
        voitures: state.voitures.map((v) => (v.id === action.payload.id ? action.payload : v)),
      };
      break;
    case LISTE_V:
      newState = state;
      break;
    default:
      newState = state;
  }
  return newState;
}
