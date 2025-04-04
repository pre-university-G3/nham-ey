import React from "react";
import RestaurantCard from "../../component/cards/RasturantCard";
import { useEffect, useState } from "react";
export default function Rasturant() {
  const [Rasturant, setRasturant] = useState([]);
  let allRasturants;
  async function getRasturant() {
    fetch;
    const Rasturants = await fetch("https://nham-ey.istad.co/restaurants").then(
      (response) => response.json()
    );
    setRasturant(Rasturants);
  }
  useEffect(() => {
    getRasturant();
  }, []);
  console.log("Rasturants:>>", Rasturant);
  const base_url = `https://nham-ey.istad.co`;

  return (
    <main className="">
      <div className="text-center my-10">
        <h1 className="text-primary text-[32px] font-bold">
          Restaurant Listing
        </h1>
        <div className="flex justify-center mt-2">
          <svg
            width="372"
            height="4"
            viewBox="0 0 372 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.236328"
              y1="2.25"
              x2="185.666"
              y2="2.25"
              stroke="black"
              strokeWidth="3"
            />
            <path d="M185.664 2.25H371.093" stroke="#75A511" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mb-[100px]">
        <section className="mx-[100px] grid grid-cols-2 gap-[20px]   lg:grid-cols-2  px-4">
          {Rasturant.map((Rasturant) => (
            <RestaurantCard
              key={Rasturant.id}
              name={Rasturant.name}
              image_url={`${base_url}${Rasturant.image_url}`}
              description={Rasturant.description}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
