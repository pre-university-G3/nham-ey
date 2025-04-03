import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Rasturant from './pages/MenuPage/Rasturant.jsx';
import Root from './pages/Layout/Root.jsx';
import Food from './pages/MenuPage/Food.jsx';
import About from './pages/MenuPage/About.jsx';
import Login from "./pages/MenuPage/login.jsx";
import Register from "./pages/MenuPage/Register.jsx";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Root/>}>
        <Route path="/" element={<App/>} />
        <Route path="/restaurant" element={<Rasturant/>} />
        <Route path="/food" element={<Food />} />
        <Route path="/About" element={<About/>} />
      </Route>
      <Route path="/logIn" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />

    </Routes>
  </BrowserRouter>
)