import React, { useEffect, useState } from "react";
import FoodCard from "../../component/cards/FoodCard";

export default function Food() {
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [selectedMealType, setSelectedMealType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const mealTypes = ["all", "breakfast", "lunch", "dinner", "snack"];
  const base_url = "https://nham-ey.istad.co";

  // Fetch food data
  async function getFood() {
    try {
      const response = await fetch(`${base_url}/food-items`);
      const foods = await response.json();
      setFood(foods);
      setFilteredFood(foods);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  }

  // Filter effects
  useEffect(() => {
    getFood();
  }, []);

  useEffect(() => {
    let results = food;
    
    // Apply meal type filter
    if (selectedMealType !== "all") {
      results = results.filter(item => 
        item.meal_types && item.meal_types.includes(selectedMealType)
      );
    }
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredFood(results);
  }, [selectedMealType, searchTerm, food]);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-zinc-800">Your choice</span>
          <span className="text-primary"> is here</span>
        </h1>
        <div className="flex justify-center mt-2">
          <svg width="372" height="4" viewBox="0 0 372 4">
            <line x1="0" y1="2" x2="186" y2="2" stroke="black" strokeWidth="3" />
            <line x1="186" y1="2" x2="372" y2="2" stroke="#75A511" strokeWidth="3" />
          </svg>
        </div>
      </div>

      {/* Search Input */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
      </div>

      {/* Meal Type Filters */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {mealTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedMealType(type)}
            className={`px-5 py-2 rounded-xl capitalize transition-colors ${
              selectedMealType === type
                ? "bg-primary text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFood.length > 0 ? (
          filteredFood.map((foodItem) => (
            <FoodCard
              key={foodItem.id}
              name={foodItem.name}
              price={foodItem.price}
              image_url={`${base_url}${foodItem.image_url}`}
              description={foodItem.description}
              average_rating={foodItem.average_rating}
              category={foodItem.category}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-gray-500">
              {searchTerm 
                ? `No items found for "${searchTerm}"`
                : "No food items available"}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
