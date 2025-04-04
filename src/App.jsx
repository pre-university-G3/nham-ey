import React from "react";
import "./index.css";
import FoodCard from "./component/cards/FoodCard";
import Restaurant from "./component/cards/Resturant";
import Catagories from "./component/cards/Catagories"

function App() {
  return (
    <>
  
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
          <div className=" flex justify-center my-[50px]">
            <div className="grid grid-cols-4 gap-[30px]">
            <Catagories
              image="https://images.deliveryhero.io/image/fd-kh/Products/3568351.jpg?width=%s"
              title="Breakfast"
            />
              </div>
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
            </div>
          <div className="flex flex-wrap justify-center mt-10 ">
            <div className="grid grid-cols-2 gap-[20px]">

            <Restaurant
              image="https://images.deliveryhero.io/image/fd-kh/Products/3568351.jpg?width=%s"
              title="Sofitel Hotel & Restaurant"
              description="Sofitel Phnom Penh Phokeethra is a luxury hotel offering elegant rooms, fine dining, and premium amenities in a prime location."
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
            </div>
          <div className=" flex flex-wrap justify-center mt-10">
            <div className="grid grid-cols-3 gap-[20px]">
            <FoodCard
            image="https://media.istockphoto.com/id/1327486548/photo/nigerian-okra-soup-with-garri.jpg?s=612x612&w=0&k=20&c=AW5kYEgtpxoWw1198IiLQ-cyDj0ieCH9XWTiZU-ZKWI="
            title="Somlor Proher"
            description="I love this food"
            price="2"
            rate="4" />
            </div>
          </div>
      </main>
    </>
  );
}

export default App;
