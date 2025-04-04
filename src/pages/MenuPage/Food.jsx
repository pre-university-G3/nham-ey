import React, { useEffect, useState } from 'react';
import FoodCard from '../../component/cards/FoodCard';

export default function Food() {
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [selectedMealType, setSelectedMealType] = useState("all");

  const mealTypes = ["all", "breakfast", "lunch", "dinner", "snack"];

  async function getFood() {
    const foods = await fetch("https://nham-ey.istad.co/food-items").then((response) => response.json());
    setFood(foods);
    setFilteredFood(foods);
  }

  useEffect(() => {
    getFood();
  }, []);

  useEffect(() => {
    if (selectedMealType === "all") {
      setFilteredFood(food);
    } else {
      const filtered = food.filter((item) => item.meal_types && item.meal_types.includes(selectedMealType));
      setFilteredFood(filtered);
    }
  }, [selectedMealType, food]);

  const base_url = `https://nham-ey.istad.co`;
  return (
    <>
      <main>
        <div className="text-center text-3xl font-bold flex justify-center items-center bg-gray-100 py-4 rounded-lg shadow-md mb-10">
          <h1>Your Choice</h1>
          <span className="text-primary ml-2">is Here</span>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {mealTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedMealType(type)}
              className={`flex justify-center items-center space-x-2 px-4 py-2 rounded-lg mx-2 ${
                selectedMealType === type ? "bg-primary text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <section className="mx-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {filteredFood.length > 0 ? (
            filteredFood.map((food) => (
              <FoodCard
                key={food.id}
                name={food.name}
                price={food.price}
                image_url={`${base_url}${food.image_url}`}
                description={food.description}
                average_rating={food.average_rating}
                category={food.category}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-lg py-8">No food items found for this meal type.</p>
          )}
        </section>
      </main>
    </>
  );
}
