import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUsPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/asmbyte" element={<LandingPage />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
