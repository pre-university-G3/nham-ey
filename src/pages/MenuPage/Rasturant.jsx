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
    <main className="">
      {/* Contained Hero Banner Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden h-[400px] bg-primary">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 bg-[url('/Assets/cambodian-pattern.png')] bg-repeat opacity-20 mix-blend-overlay"></div>
            
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
            
            {/* Floating food elements */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-[url('/Assets/floating-nom-banh-chok.png')] bg-contain bg-no-repeat animate-float"></div>
            <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-[url('/Assets/floating-amok.png')] bg-contain bg-no-repeat animate-float-delay"></div>
            
            {/* Content */}
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="max-w-2xl backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase text-white tracking-tight">
                  <span className="text-yellow-300">SAVOR</span> THE TRUE TASTE OF CAMBODIA
                </h1>
                <p className="text-xl mb-6 text-white/90 font-light">FRESH, FLAVORFUL, AUTHENTIC</p>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Listing Section */}
      <div className="text-center my-16">
        <h1 className="text-primary text-4xl font-bold mb-4">
          Discover <span className="text-gray-800">Cambodia's Finest</span>
        </h1>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gray-300 rounded-full"></div>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our curated selection of authentic Cambodian restaurants, each offering unique flavors and traditional dining experiences.
        </p>
      </div>
      
      <div className="container mx-auto px-4 mb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Rasturant.map((Rasturant) => (
            <RestaurantCard
              key={Rasturant.id}
              name={Rasturant.name}
              image_url={`${base_url}${Rasturant.image_url}`}
              description={Rasturant.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
