import React from "react";
import "./index.css";
import FoodCard from "./component/cards/FoodCard";
import { useEffect, useState } from "react";
import RastaurantCard from "./component/cards/RasturantCard";
import FoodCategory from "./component/cards/FoodCategory";


export default function App() {
  const [food, setFood] = useState([]);
  const [trendingFood, setTrendingFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Rastaurant, setRastaurant] = useState([]);
  const [trendingRastaurant, setTrendingRastaurant] = useState([]);

  async function getFood() {
    try {
      setIsLoading(true);
      const foods = await fetch("https://nham-ey.istad.co/food-items").then(
        (response) => response.json()
      );
      setFood(foods);
      const trending = [...foods]
        .sort((a, b) => b.average_rating - a.average_rating)
        .slice(0, 6); // Top 3 rated foods
      setTrendingFood(trending);
    } catch (error) {
      console.error("Error fetching food:", error);
    } finally {
      setIsLoading(false);
    }
  }
  //////////////////////////////////////////////////////////

  useEffect(() => {
    getFood();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading food items...</p>
      </div>
    );
  }

  const base_url = `https://nham-ey.istad.co`;

  return (
    <>
      <main>
        <section className="w-full h-screen relative overflow-hidden bg-[#E5F7DC] flex items-center">
          {/* Background Shape (Optional) */}
          <div className="absolute top-0 left-0 w-full h-full bg-green-200 rounded-br-[50%] md:rounded-br-[40%] lg:rounded-br-[30%]"></div>

          {/* Banner Content */}
          <div className="relative z-10 flex flex-col items-start px-8 md:px-16 lg:px-32 w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 uppercase tracking-wide leading-tight">
              Experience Authentic
            </h1>

            <div className="flex items-center mt-2">
              <div className="w-16 h-1 bg-primary mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase">
                Cambodian Cuisine
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-800 mt-4">
              Discover the rich flavors and traditions of Cambodia at Nham Ey.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="w-[159px] h-[46px] bg-hover-primary text-white text-xl rounded-xl hover:bg-primary">
                Explore Foods
              </button>
              <button className="w-[183px] h-[46px] border-2 bg-bg-1 border-hover-primary rounded-xl text-xl text-zinc-800 hover:bg-hover-primary hover:text-white">
                Find Restaurant
              </button>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative w-1/2 flex justify-center">
            <img
              src="/public/Assets/salad-splah-explosion-transparent-background_1259336-338-removebg-preview.png"
              alt="Cambodian Food"
              className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
            />
          </div>
        </section>

        {/* Rest of your content remains the same */}

        {/* CATEGORY */}
        <div className="text-center">
          <h1 className="text-primary text-[32px] font-bold">OUR CATEGORIES</h1>
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
          <div className=" flex justify-center gap-10 my-[50px]">
            <FoodCategory
              image="../src/images/food/breakfast.png"
              title="Breakfast"
            />
            <FoodCategory image="../src/images/food/lunch.png" title="Lunch" />
            <FoodCategory
              image="../src/images/food/dessert.png"
              title="Dessert"
            />
            <FoodCategory
              image="../src/images/food/fast_food.png"
              title="Fast Food"
            />
          </div>
        </div>

         {/* BANNER */}
         <div className=" bg-bg-2 0 w-full h-[193px] my-[50px] flex ">
          <div className=" mx-[200px]">
            <span className=" flex items-baseline gap-3">
              <h1 className=" inline text-[60px] text-primary font-bold">
                Good Food
              </h1>
              <h1 className=" inline text-[32px] font-bold text-zinc-700">
                Great time!
              </h1>
            </span>
            <p className="w-[500px] h-[68px] break-word text-sm text-zinc-600">
              Enjoy your day with many of foods, Find your favouritre foods, Our
              site give you info of the foods whom you like.
            </p>
          </div>
          <div>
            <img src="../src/images/img-style.png" />
          </div>
        </div>

        {/*  TRENDING */}
        <section className="mb-12">
          <div className="text-center text-3xl font-bold flex justify-center items-center py-4 my-10">
            <div className="text-center">
              <h1 className="text-primary text-[32px] font-bold">
                TRENDING FOOD
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
                  <path
                    d="M185.664 2.25H371.093"
                    stroke="#75A511"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-[100px] flex flex-wrap justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingFood.map((food) => (
              <FoodCard
                key={`trending-${food.id}`}
                name={food.name}
                price={food.price}
                image_url={`${base_url}${food.image_url}`}
                description={food.description}
                average_rating={food.average_rating}
                category={food.category}
                isTrending={true}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
