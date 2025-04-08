import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaClock, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const base_url = `https://nham-ey.istad.co`;

  useEffect(() => {
    async function fetchRestaurantDetail() {
      try {
        const res = await fetch(`${base_url}/restaurants/${id}`);
        const data = await res.json();
        setRestaurant(data);
      } catch (err) {
        console.error("Failed to fetch restaurant detail:", err);
      }
    }

    fetchRestaurantDetail();
  }, [id]);

  if (!restaurant) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary dark:border-yellow-400"></div>
      </div>
    );
  }

  return (
    <main className="dark:bg-gray-900 dark:text-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src={`${base_url}${restaurant.image_url}`}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-2">{restaurant.name}</h1>
          <div className="flex items-center text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5" />
            ))}
            <span className="ml-2 text-white">4.8 (120 reviews)</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {restaurant["cuisine types"]?.map((cuisine, index) => (
              <span key={index} className="px-3 py-1 bg-primary/20 text-primary dark:text-yellow-400 rounded-full text-sm">
                {cuisine}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-primary dark:border-yellow-400 text-primary dark:text-yellow-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('menu')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'menu' ? 'border-primary dark:border-yellow-400 text-primary dark:text-yellow-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                Menu
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-primary dark:border-yellow-400 text-primary dark:text-yellow-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab('photos')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'photos' ? 'border-primary dark:border-yellow-400 text-primary dark:text-yellow-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                Photos
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">About {restaurant.name}</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{restaurant.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Opening Hours</h3>
                    <ul className="space-y-2">
                      {Object.entries(restaurant.opening_hours || {}).map(([day, hours]) => (
                        <li key={day} className="flex justify-between">
                          <span className="font-medium">{day}</span>
                          <span>{hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <FaMapMarkerAlt className="text-primary dark:text-yellow-400 mr-3" />
                        <div>
                          <p>{restaurant.address}</p>
                          <p>{restaurant.city}, {restaurant.state} {restaurant.pasta_code}</p>
                          <p>{restaurant.country}</p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <FaPhone className="text-primary dark:text-yellow-400 mr-3" />
                        <a href={`tel:${restaurant.phone}`} className="hover:underline">{restaurant.phone}</a>
                      </li>
                      <li className="flex items-center">
                        <FaEnvelope className="text-primary dark:text-yellow-400 mr-3" />
                        <a href={`mailto:${restaurant.email}`} className="hover:underline">{restaurant.email}</a>
                      </li>
                      <li className="flex items-center">
                        <FaGlobe className="text-primary dark:text-yellow-400 mr-3" />
                        <a href={restaurant.website} target="_blank" rel="noopener noreferrer" className="hover:underline">Visit Website</a>
                      </li>
                    </ul>

                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <h4 className="text-sm font-medium mb-2">Follow Us</h4>
                      <div className="flex space-x-4">
                        {restaurant.social_world?.facebook && (
                          <a href={restaurant.social_world.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
                          </a>
                        )}
                        {restaurant.social_world?.instagram && (
                          <a href={restaurant.social_world.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-6 h-6 text-pink-600 hover:text-pink-800" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold">${restaurant.price_cover}</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-400">per person</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'menu' && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Menu Coming Soon</h2>
                <p className="text-gray-600 dark:text-gray-400">We're currently working on our menu. Please check back later!</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Reviews Coming Soon</h2>
                <p className="text-gray-600 dark:text-gray-400">We're collecting reviews for this restaurant. Check back later!</p>
              </div>
            )}

            {activeTab === 'photos' && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Photos Coming Soon</h2>
                <p className="text-gray-600 dark:text-gray-400">We're gathering photos of this restaurant. Stay tuned!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}