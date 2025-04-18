import { useEffect, useState } from "react";
import FoodCard from "../../component/cards/FoodCard";
import { toast } from "react-toastify";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWishlist = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please login.");
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch("https://nham-ey.istad.co/wishlist", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to fetch wishlist.");
      }

      const data = await res.json();
      const normalized = data.map((item) => {
        const food = item.item;
        return { ...food, wishlistId: item.id };
      });

      setWishlistItems(normalized);
    } catch (err) {
      toast.error(err.message);
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const removeFromUI = (foodId) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== foodId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">My Wishlist</h1>
      {isLoading ? (
        <p className="text-center p-[20%]">Loading...</p>
      ) : wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <FoodCard
              key={item.id}
              id={item.id}
              name={item.name}
              image_url={item.image_url}
              description={item.description}
              price={item.price}
              average_rating={item.average_rating}
              isWishlisted={true}
              wishlistId={item.wishlistId}
              toggleWishlist={removeFromUI}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 p-[20%]">Your wishlist is empty.</p>
      )}
    </div>
  );
}


