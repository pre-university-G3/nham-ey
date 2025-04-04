import React, { useEffect, useState } from "react";
import "./index.css";
import FoodCard from "./component/cards/FoodCard";
import FoodCategory from "./component/cards/FoodCategory";
import ResturantCard from "./component/cards/ResturantCard";

export default function App() {
  const [food, setFood] = useState([]);
  const [trendingFood, setTrendingFood] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [trendingRestaurant, setTrendingRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const base_url = `https://nham-ey.istad.co`;

  async function getFood() {
    try {
      const foods = await fetch(`${base_url}/food-items`).then((res) =>
        res.json()
      );
      setFood(foods);
      const trending = [...foods]
        .sort((a, b) => b.average_rating - a.average_rating)
        .slice(0, 6);
      setTrendingFood(trending);
    } catch (error) {
      console.error("Error fetching food:", error);
    }
  }

  async function getRestaurant() {
    try {
      const data = await fetch(`${base_url}/restaurants`).then((res) =>
        res.json()
      );
      setRestaurant(data);
      const trending = [...data]
        .sort((a, b) => b.average_rating - a.average_rating)
        .slice(0, 4);
      setTrendingRestaurant(trending);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getFood(), getRestaurant()]).finally(() =>
      setIsLoading(false)
    );
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading content...</p>
      </div>
    );
  }

  return (
    <main>
      {/* HERO SECTION */}
      <section className="w-full h-screen relative overflow-hidden bg-[#E5F7DC] flex items-center">
        <div className="absolute top-0 left-0 w-full h-full bg-green-200 rounded-br-[50%] md:rounded-br-[40%] lg:rounded-br-[30%]"></div>

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
          <div className="mt-6 flex gap-4">
            <button className="w-[159px] h-[46px] bg-hover-primary text-white text-xl rounded-xl hover:bg-primary">
              Explore Foods
            </button>
            <button className="w-[183px] h-[46px] border-2 bg-bg-1 border-hover-primary rounded-xl text-xl text-zinc-800 hover:bg-hover-primary hover:text-white">
              Find Restaurant
            </button>
          </div>
        </div>

        <div className="relative w-1/2 flex justify-center">
          <img
            src="/Assets/salad-splah-explosion-transparent-background_1259336-338-removebg-preview.png"
            alt="Cambodian Food"
            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
          />
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <div className="text-center my-12">
        <h1 className="text-primary text-[32px] font-bold">OUR CATEGORIES</h1>
        <div className="flex justify-center mt-2">
          <svg width="372" height="4" viewBox="0 0 372 4" fill="none">
            <line x1="0" y1="2.25" x2="185.666" y2="2.25" stroke="black" strokeWidth="3" />
            <path d="M185.664 2.25H371.093" stroke="#75A511" strokeWidth="3" />
          </svg>
        </div>
        <div className="flex justify-center gap-10 my-10">
          <FoodCategory image="../src/images/food/breakfast.png" title="Breakfast" />
          <FoodCategory image="../src/images/food/lunch.png" title="Lunch" />
          <FoodCategory image="../src/images/food/dessert.png" title="Dessert" />
          <FoodCategory image="../src/images/food/fast_food.png" title="Fast Food" />
        </div>
      </div>

      {/* TOP RESTAURANT */}
      <div className="text-center">
        <h1 className="text-primary text-[32px] font-bold">TOP RESTAURANTS</h1>
        <div className="flex justify-center mt-2">
          <svg width="372" height="4" viewBox="0 0 372 4" fill="none">
            <line x1="0" y1="2.25" x2="185.666" y2="2.25" stroke="black" strokeWidth="3" />
            <path d="M185.664 2.25H371.093" stroke="#75A511" strokeWidth="3" />
          </svg>
        </div>
        <div className="mx-50 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 px-4 mt-10">
          {trendingRestaurant.map((res) => (
            <ResturantCard
              key={`trending-${res.id}`}
              name={res.name}
              image_url={`${base_url}${res.image_url}`}
              description={res.description}
              average_rating={res.average_rating}
              isTrending={true}
            />
          ))}
        </div>
      </div>

      {/* BANNER */}
      <div className="bg-bg-2 w-full h-[193px] my-[50px] flex items-center justify-between px-[100px]">
        <div>
          <h1 className="text-[60px] text-primary font-bold">Good Food</h1>
          <h2 className="text-[32px] font-bold text-zinc-700">Great time!</h2>
          <p className="w-[500px] text-sm text-zinc-600">
            Enjoy your day with many foods. Find your favorite dishes. Our site gives you
            info about the foods you like.
          </p>
        </div>
        <div>
          <img src="../src/images/img-style.png" alt="Decorative Banner" />
        </div>
      </div>

      {/* TRENDING FOODS */}
      <section className="mb-12">
        <div className="text-center">
          <h1 className="text-primary text-[32px] font-bold">TRENDING FOOD</h1>
          <div className="flex justify-center mt-2">
            <svg width="372" height="4" viewBox="0 0 372 4" fill="none">
              <line x1="0" y1="2.25" x2="185.666" y2="2.25" stroke="black" strokeWidth="3" />
              <path d="M185.664 2.25H371.093" stroke="#75A511" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
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
        </div>
      </section>
    </main>
  );
}
