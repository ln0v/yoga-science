// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AsanaDetailPage from "./pages/AsanaDetailPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/asana/:id" element={<AsanaDetailPage />} />
    </Routes>
  );
}

export default App;
