import React,{useState} from "react";

export default function SearchBar() {
    const [typed,Settyped] = useState("");

    const handleSearch = () => {
        
        console.log("Searching for:", typed);
    }
    return (
        <div className="flex items-center bg-white rounded-full shadow-md p-2 w-full max-w-xl">
        <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-transparent outline-none text-gray-500 px-4 rounded-full"
            value={typed}
            onChange={(e) => Settyped(e.target.value)}
        />
        <button
            className="bg-black text-white rounded-full px-8 py-2 font-medium shadow hover:bg-gray-900 transition"
            onClick={handleSearch}
        >
            Search
        </button>
    </div>
)}
