"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);

        if (!token) {
          console.log("No token found, redirecting to login");
          navigate("/login");
          return;
        }

        const response = await fetch("https://nham-ey.istad.co/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", response.status);

        if (response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error("API Error:", errorData);
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }

        const data = await response.json();
        console.log("API Response:", data);

        const userData = Array.isArray(data) ? data[0] : data;

        if (!userData || !userData.username) {
          throw new Error("Invalid user data format");
        }

        setUser(userData);
        setError("");
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Unable to fetch your profile. Please try again.");
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-50 p-6 rounded-lg max-w-md w-full text-center">
          <h3 className="text-red-600 font-bold text-lg mb-2">Error</h3>
          <p className="text-red-700 mb-4">{error}</p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Try Again
            </button>
            <button
              onClick={handleLogout}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-md">
        <div className="bg-blue-500 p-6 text-white">
          <h1 className="text-2xl font-bold">User Profile</h1>
          <p className="opacity-90">Your account information</p>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex justify-between border-b pb-3">
            <span className="font-medium text-gray-600">Username</span>
            <span className="text-gray-800">{user?.username || "-"}</span>
          </div>
          <div className="flex justify-between border-b pb-3">
            <span className="font-medium text-gray-600">Email</span>
            <span className="text-gray-800">{user?.email || "-"}</span>
          </div>
        </div>

        <div className="p-6 pt-0 space-y-3">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition"
          >
            Back to Home
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
