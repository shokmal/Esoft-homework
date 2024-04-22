import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/MyProfile" element={<Profile />} />
    </Routes>
  );
}

export default App;
