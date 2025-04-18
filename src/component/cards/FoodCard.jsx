import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

export default function FoodCard({
  id,
  image_url,
  name,
  description,
  price,
  average_rating,
  isWishlisted = false,
  toggleWishlist,
}) {
  const [isInWishlist, setIsInWishlist] = useState(isWishlisted);

  useEffect(() => {
    setIsInWishlist(isWishlisted);
  }, [isWishlisted]);

  const handleWishlistToggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (isInWishlist) {
        const res = await fetch(`https://nham-ey.istad.co/wishlist/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (res.ok) {
          setIsInWishlist(false);
          toast.success("Removed from wishlist");
          toggleWishlist && toggleWishlist();
        } else {
          toast.error("Failed to remove item");
        }
      } else {
        const res = await fetch("https://nham-ey.istad.co/wishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ food_item_id: id }),
        });
        if (res.ok) {
          setIsInWishlist(true);
          toast.success("Added to wishlist");
          toggleWishlist && toggleWishlist();
        } else {
          toast.error("Failed to add item");
        }
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error);
      toast.error("Something went wrong");
    }
  };

  const baseURL = "https://nham-ey.istad.co";
  const validImageUrl = image_url?.startsWith("http")
    ? image_url
    : image_url
    ? `${baseURL}${image_url}`
    : "/placeholder-image.png";

  return (
    <NavLink to={`/food/${id}`}>
      <div className="w-[400px] h-[419px] bg-white dark:bg-gray-600 rounded-xl shadow-sm hover:ring-2 hover:ring-primary hover:scale-101 transition duration-200 relative">
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white"
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill={isInWishlist ? "red" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Food Image */}
        <div className="relative px-[20px] py-[20px] bg-[#fafaf9] dark:bg-gray-700 rounded-t-xl">
          <img
            className="w-[362px] h-[203px] object-cover rounded-t-lg"
            src={validImageUrl}
            alt={name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder-image.png";
            }}
          />
        </div>

        {/* Food Details */}
        <div className="p-4">
          <h3 className="text-[24px] font-bold text-[#494949] dark:text-gray-100 line-clamp-1">
            {name || "Unnamed food"}
          </h3>
          <small className="text-sm text-gray-600 dark:text-gray-300 mt-1 text-[16px] line-clamp-3 leading-[18px]">
            {description || "No description available."}
          </small>

          <div className="flex items-center justify-between mt-3">
            <span className="text-[#5B913B] dark:text-green-400 font-bold text-[24px]">
              ${price ?? "?"}
            </span>
            <div className="flex items-center">
              <svg
                className="w-[26px] h-[26px] text-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 text-[20px] font-bold text-gray-900 dark:text-white">
                {average_rating ? average_rating.toFixed(1) : "No rating"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}