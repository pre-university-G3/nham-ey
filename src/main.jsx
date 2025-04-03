import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Rasturant from './MenuPage/Rasturant.jsx';
import Root from './pages/Layout/Root.jsx';
import Food from './MenuPage/Food.jsx';
import About from './MenuPage/About.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Root/>}>
        <Route path="/" element={<App/>} />
        <Route path="/restaurant" element={<Rasturant/>} />
        <Route path="/food" element={<Food />} />
        <Route path="/About" element={<About/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)