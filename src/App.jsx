import React from "react";

import RasturantCard from "./component/cards/RasturantCard";
import NavbarComponent from "./pages/Layout/NavbarComponent";

function App() {
  return (
    <>
       <RasturantCard 
        image="/Assets/Nham-Ey_Png.png"
        title="Restaurant Name"
        subtitle="Restaurant Address"
      />
    </>
  );
}

export default App;
