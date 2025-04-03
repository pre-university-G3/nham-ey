import React from 'react'
import RestaurantCard from '../../component/cards/RasturantCard'
import { useEffect, useState } from 'react';
export default function Rasturant() {
  const [Rasturant, setRasturant] = useState([]);
    let allRasturants;
    async function getRasturant() {
      fetch;
      const Rasturants = await fetch('https://nham-ey.istad.co/restaurants')
      .then((response) => response.json());
      setRasturant(Rasturants);
    }
    useEffect(() => {
    getRasturant();
    }, []);
    console.log('Rasturants:>>', Rasturant)
    const base_url = `https://nham-ey.istad.co`

return (
  <main className="">
      <div className="text-center text-3xl font-bold flex justify-center items-center  bg-gray-100 py-4 rounded-lg shadow-md mb-20">
         <h1>Rasturant</h1>
         <span className="text-primary ml-2">listing</span>
    </div>
        <section className="mx-50 grid grid-cols-2  lg:grid-cols-2 gap-5 px-4">
        {Rasturant.map((Rasturant) => (
          < RestaurantCard
            key={Rasturant.id}
            name={Rasturant.name}
            image_url={`${base_url}${Rasturant.image_url}`}
            description={Rasturant.description}
          />
        ))}
        </section>  
        
      </main>
)
}
