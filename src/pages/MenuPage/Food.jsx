import React, { useEffect, useState } from "react";
import FoodCard from "../../component/cards/FoodCard";

export default function Food() {
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [selectedMealType, setSelectedMealType] = useState("all");

  const mealTypes = ["all", "breakfast", "lunch", "dinner", "snack"];

  async function getFood() {
    const foods = await fetch("https://nham-ey.istad.co/food-items").then(
      (response) => response.json()
    );
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
      const filtered = food.filter(
        (item) => item.meal_types && item.meal_types.includes(selectedMealType)
      );
      setFilteredFood(filtered);
    }
  }, [selectedMealType, food]);

  const base_url = `https://nham-ey.istad.co`;
  return (
    <>
      <main>
        <div className="text-center my-10">
          <span className=" text-[32px] font-bold">
            <p className=" inline text-zinc-800"> Your choice</p>
            <p className=" inline text-primary"> is here</p>
          </span>
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
              <path
                d="M185.664 2.25H371.093"
                stroke="#75A511"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {mealTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedMealType(type)}
              className={`flex justify-center items-center space-x-2 px-4 py-2 rounded-lg mx-2 ${
                selectedMealType === type
                  ? "bg-primary text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className=" flex flex-wrap justify-center"> 
          <section className="mx-[100px] grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
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
              <p className="col-span-full text-center text-lg py-8">
                No food items found for this meal type.
              </p>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
