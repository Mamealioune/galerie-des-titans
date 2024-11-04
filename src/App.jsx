import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Carousel3D from "./Pages/Carousel3D";
import Home from "./Pages/Home";
import Legendes from "./Pages/Legendes";
import Modal from "./Pages/Modal";

import PersonDetails from "./Pages/PersonDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
          <Route path="/" element={<Home />} />
          <Route path="/carousel" element={<Carousel3D />} />
          <Route path="/Legendes" element={<Legendes />} />

          <Route path="/Modal" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
