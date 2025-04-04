"use client";

import { useState, useEffect } from "react";
import FoodCard from "../../component/cards/FoodCard";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const response = await fetch("https://nham-ey.istad.co/wishlist");
        if (response.ok) {
          const data = await response.json();
          setWishlistItems(data);
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    }
    fetchWishlist();
  }, []);

  const removeFromWishlist = async (foodId) => {
    try {
      const response = await fetch(`https://nham-ey.istad.co/wishlist/${foodId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setWishlistItems((prev) => prev.filter((item) => item.id !== foodId));
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-6">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((food) => (
            <FoodCard key={food.id} {...food} isWishlisted={true} toggleWishlist={() => removeFromWishlist(food.id)} />
          ))
        ) : (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
}
