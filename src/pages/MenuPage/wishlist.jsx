import { useState, useEffect } from "react";
import FoodCard from "../../component/cards/FoodCard";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    async function fetchWishlist() {
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch("https://nham-ey.istad.co/wishlist", requestOptions);
        if (response.ok) {
          const data = await response.json();
          const normalized = data.map((item) => {
            const food = item.food_item || item;
            return {
              ...food,
              wishlistId: item.id,
            };
          });
          setWishlistItems(normalized);
        } else {
          toast.error("Failed to fetch wishlist");
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        toast.error("Something went wrong");
      }
    }

    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (foodId) => {
    try {
      const response = await fetch(`https://nham-ey.istad.co/wishlist/${foodId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        setWishlistItems((prev) => prev.filter((item) => item.id !== foodId));
        toast.success("Removed from wishlist!");
      } else {
        toast.error("Failed to remove item");
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-6">My Wishlist</h1>
      <div className="flex justify-center mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {wishlistItems.length > 0 ? (
              wishlistItems.map((food) => (
                <motion.div
                  key={food.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <FoodCard
                    id={food.id}
                    image_url={food.image_url}
                    name={food.name}
                    description={food.description}
                    price={food.price}
                    average_rating={food.average_rating}
                    isWishlisted={true}
                    toggleWishlist={() => handleRemoveFromWishlist(food.id)}
                  />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">Your wishlist is empty.</p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
