import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [typed, Settyped] = useState("");
  const navigate = useNavigate();

  //  SIMPLE & CLEAN VALIDATION
  const isValid =
    typed.trim().length > 2 &&
    /^[a-zA-Z\s]+$/.test(typed.trim());

  const handleSearch = () => {
    if (!isValid) return;

    navigate("/loading", {
      state: { fishName: typed.trim() },
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
          if (e.key === "Enter" && isValid) {
            handleSearch();
          }
        }}
      />

      <button
        className={`rounded-full px-8 py-2 font-medium shadow transition
          ${isValid
            ? "bg-black text-white hover:bg-gray-900"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        disabled={!isValid}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
