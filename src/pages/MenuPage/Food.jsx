"use client"

import { useEffect, useState } from "react"
import FoodCard from "../../component/cards/FoodCard"
import toast from "react-hot-toast"

export default function Food() {
  const [food, setFood] = useState([])
  const [filteredFood, setFilteredFood] = useState([])
  const [selectedMealType, setSelectedMealType] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [wishlistMap, setWishlistMap] = useState({}) // Track wishlist status by food ID

  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("")
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const placeholderTips = [
    "Search Iced Coffee...",
    "Search Lok lak...",
    "Search Chicken...",
    "Search Avocado...",
    "Search Nom Akor...",
  ]

  const mealTypes = ["all", "breakfast", "lunch", "dinner", "snack", "dessert"]
  const base_url = "https://nham-ey.istad.co"

  useEffect(() => {
    if (searchTerm !== "") {
      setAnimatedPlaceholder("")
      return
    }

    let tipIndex = placeholderIndex
    let charIndex = 0
    const currentTip = placeholderTips[tipIndex]
    const typingSpeed = 80
    const delayAfterTyping = 1700

    const type = () => {
      if (charIndex <= currentTip.length) {
        setAnimatedPlaceholder(currentTip.slice(0, charIndex) + "_")
        charIndex++
        typingTimer = setTimeout(type, typingSpeed)
      } else {
        waitingTimer = setTimeout(() => {
          tipIndex = (tipIndex + 1) % placeholderTips.length
          setPlaceholderIndex(tipIndex)
        }, delayAfterTyping)
      }
    }

    let typingTimer = setTimeout(type, typingSpeed)
    let waitingTimer

    return () => {
      clearTimeout(typingTimer)
      clearTimeout(waitingTimer)
    }
  }, [placeholderIndex, searchTerm])

  const getFood = async () => {
    try {
      const response = await fetch(`${base_url}/food-items`)
      const foods = await response.json()
      setFood(foods)
      setFilteredFood(foods)
    } catch (error) {
      console.error("Error fetching food items:", error)
    }
  }

  const fetchWishlist = async () => {
    const token = localStorage.getItem("token")
    if (!token) return

    try {
      const res = await fetch(`${base_url}/wishlist`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (!res.ok) throw new Error("Failed to fetch wishlist")

      const data = await res.json()
      const newMap = {}
      data.forEach((item) => {
        newMap[item.item.id] = item.id // foodId -> wishlistId
      })

      setWishlistMap(newMap)
    } catch (err) {
      console.error("Error fetching wishlist:", err)
    }
  }

  useEffect(() => {
    getFood()
    fetchWishlist()
  }, [])

  useEffect(() => {
    let results = food

    if (selectedMealType !== "all") {
      results = results.filter(
        (item) =>
          item.meal_types && item.meal_types.map((type) => type.toLowerCase()).includes(selectedMealType.toLowerCase()),
      )

      results.sort((a, b) => {
        const aExclusive = a.meal_types.length === 1 && a.meal_types[0].toLowerCase() === selectedMealType.toLowerCase()
        const bExclusive = b.meal_types.length === 1 && b.meal_types[0].toLowerCase() === selectedMealType.toLowerCase()
        return bExclusive - aExclusive
      })
    }

    if (searchTerm) {
      results = results.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    setFilteredFood(results)
  }, [selectedMealType, searchTerm, food])

  const handleToggleWishlist = (foodId, updatedWishlistId = null) => {
    setWishlistMap((prev) => {
      const newMap = { ...prev }
      if (updatedWishlistId) {
        newMap[foodId] = updatedWishlistId // add to wishlist
        toast.success("Added to Wishlist!") // Show success toast
      } else {
        delete newMap[foodId] // remove from wishlist
        toast.error("Removed from Wishlist!") // Show error toast (when removed)
      }
      return newMap
    })
  }

  return (
    <main className="pt-4 pb-1 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="text-zinc-800 dark:text-gray-100">Your choice</span>
          <span className="text-primary dark:text-[#68e66f]"> is here</span>
        </h1>
        <div className="flex justify-center mt-2">
          <svg width="200" height="4" viewBox="0 0 372 4" className="w-full max-w-sm">
            <line x1="0" y1="2" x2="186" y2="2" stroke="gray" strokeWidth="3" />
            <line x1="186" y1="2" x2="372" y2="2" stroke="#75A511" strokeWidth="3" />
          </svg>
        </div>
      </div>

      {/* Search Input */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder={animatedPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-[#68e66f] transition-all font-mono"
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
                ? "bg-primary text-white shadow-md dark:bg-[#68e66f] dark:text-gray-900"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <section className="mb-12">
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredFood.length > 0 ? (
              filteredFood.map((foodItem) => (
                <FoodCard
                  key={foodItem.id}
                  id={foodItem.id}
                  name={foodItem.name}
                  price={foodItem.price}
                  image_url={`${base_url}${foodItem.image_url}`}
                  description={foodItem.description}
                  average_rating={foodItem.average_rating}
                  category={foodItem.category}
                  isWishlisted={!!wishlistMap[foodItem.id]}
                  wishlistId={wishlistMap[foodItem.id]}
                  toggleWishlist={(foodId, newWishlistId) => handleToggleWishlist(foodId, newWishlistId)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500 dark:text-gray-400">
                  {searchTerm ? `No items found for "${searchTerm}"` : "No food items available"}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
