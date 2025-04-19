import React from "react";
import RestaurantCard from "../../component/cards/ResturantCard";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Rasturant() {
  const [Rasturant, setRasturant] = useState([]);

  async function getRasturant() {
    const Rasturants = await fetch("https://nham-ey.istad.co/restaurants").then(
      (response) => response.json()
    );
    setRasturant(Rasturants);
  }

  useEffect(() => {
    getRasturant();
  }, []);

  const base_url = `https://nham-ey.istad.co`;

  return (
    <main className="dark:bg-gray-900 dark:text-white py-10">
      <div className="flex justify-center mx-6 my-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Rasturant.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id} // Added this line to pass the id
              name={restaurant.name}
              image_url={`${base_url}${restaurant.image_url}`}
              description={restaurant.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
