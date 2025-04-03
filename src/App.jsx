import React from "react";

import RasturantCard from "./component/cards/RasturantCard";


function App() {
  return (
    <>
       <RasturantCard className="w-[611px] h-[225px] flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm md:max-w-xl hover:bg-gray-100 "
        image="/public/Assets/restaurant1.jpg"
        title="Restaurant Name"
        subtitle="Restaurant Address"
      />
    </>
  );
}

export default App;
