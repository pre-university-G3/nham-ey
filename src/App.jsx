import React from "react";
import "./index.css";
import Card1 from "./component/cards/Card1";

function App() {
  return (
    <>
      <div className="gap-20 p-4 grid grid-cols-2">
      <Card1 
        image="https://imgs.search.brave.com/IwrVMMu5CiE4O0WQFAJl2P3oE1QEHZOgSbDRK9fhQIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/ODM0OTgwMi9waG90/by9vaGEtc291cC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Q3o0Mk9hNHpWTkI5/R2k0MU9ScVBrQ093/QWRYTzV5dkhoOUcz/dlBnTzJYYz0"
        title="Jollof Rice with Chicken" 
        subtitle="West African national cuisine. Jollof rice with grilled chicken wings and fried plantains." 
      />
    </div>
    </>
  );
}

export default App;
