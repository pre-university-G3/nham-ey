import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Hello from "./components/buttons/Hello";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewNavbar from "./layouts/Navbar";
import LoginButton from "./components/buttons/LoginButton";
import RestaurantList from "./pages/RestaurantList";
import FoodDetails from "./pages/FoodDetails";
import FoodCategory from "./components/cards/FoodCategory";
import FoodCard from "./components/cards/FoodCard";
import RestaurantCard from "./components/cards/RestaurantCard";

function App() {
  return (
    <div className="App">
      <header>
        <NewNavbar />
      </header>
      <main>
        {/* BANNER */}
        <section className=" mx-[100px] my-[100px]">
          <h1 className=" text-[60px] text-zinc-700 font-bold ">
            Experience Authentic
          </h1>
          <h2 className=" text-[36px] text-hover-primary font-bold">
            Cambodian Cuisine
          </h2>
          <h3 className=" w-[300px] h-[68px] break-word text-zinc-500 mt-3">
            Discover the rich flavors and traditions of Cambodia at Nham Ey
          </h3>

          <div className="flex gap-[15px]">
            <button className=" w-[159px] h-[46px] bg-hover-primary text-white text-xl rounded-xl hover:bg-primary">
              Explore Foods
            </button>
            <button className=" w-[183px] h-[46px] border-2 bg-bg-1 border-hover-primary rounded-xl text-xl text-zinc-800 hover:bg-hover-primary hover:text-white">
              Find Restaurants
            </button>
          </div>
        </section>

        {/* CATEGORIES */}
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

        {/* TOP RESTAURANT */}
        <div className="text-center">
          <h1 className="text-primary text-[32px] font-bold">TOP RESTAURANT</h1>
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
          <div className="flex flex-wrap gap-5 justify-center mt-10 ">
            <RestaurantCard
              image="src/images/restaurant/soiftel.png"
              title="Sofitel Hotel & Restaurant"
              description="Sofitel Phnom Penh Phokeethra is a luxury hotel offering elegant rooms, fine dining, and premium amenities in a prime location."
            />

            <RestaurantCard
              image="src/images/restaurant/hel_corner.png"
              title="Hel Corner"
              description="we bring you the boldest and most intense spicy food experience! We use only the freshest, spiciest ingredients to satisfy your craving for heat."
            />

            <RestaurantCard
              image="src/images/restaurant/la_croisette.png"
              title="La Croisette Bistro & Restauarant"
              description="Legendary breakfasts, Mediterranean cuisine, fresh juices, coffees and great craft beer all day long from 8am - 12am."
            />

            <RestaurantCard
              image="src/images/restaurant/rosewood.png"
              title="Rosewood Phnom Penh"
              description="Discover Elite Stays With Rosewood Phnom Penh, Designed For Unparalleled Luxury. Experience Unparalleled Luxury Where..."
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

        {/* TRENDING FOOD */}
        <div className="text-center">
          <h1 className="text-primary text-[32px] font-bold">TRENDING FOOD</h1>
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
          <div className=" flex flex-wrap gap-5 justify-center mt-10">
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </div>
        </div>
      </main>

      {/* <FoodDetails /> */}

      {/* <RestaurantList /> */}

      {/* <Login />

      <Register /> */}
    </div>
  );
}

export default App;
