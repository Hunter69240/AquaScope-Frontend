import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [typed, Settyped] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedSearch = typed.trim();

    let error = false;
    let errorMessage = "";

    // ❌ Empty or too short
    if (!trimmedSearch || trimmedSearch.length <= 2) {
      error = true;
      errorMessage = "Invalid fish name. Please enter at least 2 characters.";
    }

    // ❌ Special characters
    const validNameRegex = /^[a-zA-Z\s]+$/;
    if (!error && !validNameRegex.test(trimmedSearch)) {
      error = true;
      errorMessage = "Invalid fish name. Only letters and spaces are allowed.";
    }

    navigate("/loading", {
      state: {
        fishName: trimmedSearch,
        error,
        errorMessage,
      },
    });
  };

  return (
    <div className="flex items-center bg-white rounded-full shadow-md p-2 w-full max-w-xl">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow bg-transparent outline-none text-gray-500 px-4 rounded-full"
        value={typed}
        onChange={(e) => Settyped(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <button
        className="bg-black text-white rounded-full px-8 py-2 font-medium shadow hover:bg-gray-900 transition"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
