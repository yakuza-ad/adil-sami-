import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import ListeVoitures from "./components/ListeVoitures";
import { Route, Routes } from "react-router-dom";
import DetailsVoitures from "./components/DetailsVoitures";
import AjouterVoiture from "./components/AjouterVoiture";
import SupprimerVoiture from "./components/SupprimerVoiture";
import store from "./store/VoitureStore";
import Navigation from "./components/Navigation";
// import store from "./store/VoitureStore";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EFM FES-MEKNES 2025-2026</h1>
      </header>
      <Navigation />
      <Routes>
        <Route path="/" element={<ListeVoitures />} />
        <Route path="/:v1" element={<DetailsVoitures />} />
        <Route path="/add" element={<AjouterVoiture />} />
        <Route path="/delete" element={<SupprimerVoiture />} />
      </Routes>
    </div>
  );
}

export default App;
