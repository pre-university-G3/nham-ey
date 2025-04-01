import React from "react";
import ProductCard from "./component/cards/ProductCard";
import NavbarComponent from "./component/Layouts/NavbarComponent";
import

function App() {
  return (
    <>
      
      <NavbarComponent />
      <div className="grid grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
      </div>
    </>
  );
}

export default App;