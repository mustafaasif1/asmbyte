import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUsPage";
import ProductsPage from "./pages/ProductsPage";
import BlogPage from "./pages/BlogPage";
import ValuesPage from "./pages/ValuesPage";
import OpenRolesPage from "./pages/OpenRolesPage";
import "./App.css";


function App() {
  return (
    <Routes>
      <Route exact path="/asmbyte" element={<LandingPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/values" element={<ValuesPage />} />
      <Route path="/openroles" element={<OpenRolesPage />} />
    </Routes>
  );
}

export default App;
