import React from "react";
import ProductCard from "./component/cards/ProductCard";

function App() {
  return (
    <>
      <h1 className="text-red-600">Hello, world!</h1>
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
