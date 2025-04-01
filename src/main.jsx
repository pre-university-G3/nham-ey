import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import  Foodpage  from "./pages/Foodpage/Foodpage.jsx";
import RootLayout from "./component/Layouts/RootLayout.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout/>}>
      <Route path="/" element={<App />} />
      <Route path="/Foodpage" element={<Foodpage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
