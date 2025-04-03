import React from "react";


const CambodiaBanner = () => {
  return (
    <div className="bg-green-600 p-6 flex items-center justify-between rounded-lg shadow-lg overflow-hidden">
      <div>
        <h1 
          className="text-white text-2xl font-bold"

        >
          SAVOR THE TRUE TASTE OF <span className="text-yellow-400">CAMBODIA</span> -
          <span className="text-yellow-500"> FRESH, FLAVORFUL</span>
        </h1>
        <p className="text-white mt-2">Taste the Tradition, Savor the Culture</p>
      </div>
      <img
        src="/path-to-your-image.png"
        alt="Cambodian Dish"
        className="w-32 h-32 object-cover rounded-lg"
      />
    </div>
  );
};

export default CambodiaBanner;
