"use client"

import { useState, useEffect } from "react"

export default function FoodCard({ id, image_url, name, description, price, average_rating }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Check if the item is in the wishlist when the component mounts
  useEffect(() => {
    async function checkWishlistStatus() {
      try {
        const response = await fetch("https://nham-ey.istad.co/wishlist")
        if (response.ok) {
          const wishlist = await response.json()
          // Check if this food item is in the wishlist
          const isInWishlist = wishlist.some((item) => item.id === id)
          setIsWishlisted(isInWishlist)
        }
      } catch (error) {
        console.error("Error checking wishlist status:", error)
      }
    }

    checkWishlistStatus()
  }, [id])

  const toggleWishlist = async (e) => {
    e.preventDefault() // Prevent navigating when clicking the button
    setIsLoading(true)

    try {
      if (isWishlisted) {
        // Remove from wishlist
        const response = await fetch(`https://nham-ey.istad.co/wishlist/${id}`, {
          method: "DELETE",
          headers: {
            // Add authorization headers if needed
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        })

        if (response.ok) {
          setIsWishlisted(false)
        } else {
          console.error("Failed to remove from wishlist")
        }
      } else {
        // Add to wishlist
        const response = await fetch(`https://nham-ey.istad.co/wishlist`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add authorization headers if needed
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ foodId: id }),
        })

        if (response.ok) {
          setIsWishlisted(true)
        } else {
          console.error("Failed to add to wishlist")
        }
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <a href="#">
      <div className="w-[400px] h-[419px] bg-white rounded-xl shadow-sm box-border mb-10 hover:ring-hover-primary hover:ring-2 hover:scale-101 transform transition duration-200">
        <div className="relative px-[20px] py-[20px] bg-[#fafaf9] rounded-2xl">
          <img className="w-[362px] h-[203px] object-cover rounded-t-lg" src={image_url} alt={name} />
          {/* Heart Wishlist Button */}
          <button
            onClick={toggleWishlist}
            className="absolute top-8 right-8 p-2 rounded-full shadow-md bg-white/20 backdrop-blur-md"
          >
            {isWishlisted ? (
              // Filled Heart (Added to Wishlist)
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              // Outline Heart (Not Added to Wishlist)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5b913b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-[24px] font-bold text-[#494949] font-kh line-clamp-1">{name}</h3>
          <small className="text-sm text-gray-600 mt-1 text-[16px] line-clamp-3 leading-[18px]">{description}</small>

          <div className="flex items-center justify-between mt-3">
            <span className="text-[#5B913B] font-bold font-kh text-[24px]">${price}</span>
            <div className="flex items-center">
              {/* Star Icon */}
              <svg
                className="w-[26px] h-[26px] text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 text-[20px] font-kh font-bold text-gray-900">
                {average_rating ? average_rating.toFixed(1) : "No rating"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

