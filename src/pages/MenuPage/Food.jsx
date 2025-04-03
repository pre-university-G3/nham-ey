import React, { use } from 'react'
import FoodCard from '../../component/cards/FoodCard'
import { useEffect, useState } from 'react';


export default function Food() {
  const [food, setFood] = useState([]);
  let allFoods;
  async function getFood() {
    fetch;
    const foods = await fetch('https://nham-ey.istad.co/food-items')
    .then((response) => response.json());
    setFood(foods);
  }
  useEffect(() => {
    getFood();
  }, []);
  console.log('foods:>>', food)
  const base_url = `https://nham-ey.istad.co`
  
  return (
    <>
    <main>
    <div className="text-center text-3xl font-bold flex justify-center items-center  bg-gray-100 py-4 rounded-lg shadow-md mb-20">
      <h1>Your Choice</h1>
      <span className="text-primary ml-2">is Here</span>
    </div>
    {/* card section */}
    <section className='mx-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-4'>
    {food.map((food) => ( 

      <FoodCard
        key={food.id}
        name={food.name}
        price={food.price}
        image_url={`${base_url}${food.image_url}`}
        description={food.description}
        average_rating={food.average_rating}  
        category={food.category}
        />
      ))}
    </section>

    </main>
    </>
  )
}
