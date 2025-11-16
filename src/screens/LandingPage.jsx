import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function LandingPage() {
  return (
    <div className=" min-h-screen"
    style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #B3E5FC 55%, #0288D1    100%)",
      }}
    >
      <Header />

      <div className="flex flex-col gap-4 m-auto items-flex-start justify-center h-[80vh] max-w-3xl px-4">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Your Gateway to Fish Knowledge—Type, Search, Discover
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Bringing fish facts to life—dive into interactive 3D models, water requirements, and expert tips with a single search.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <SearchBar />

         
        </div>
      </div>
    </div>
  );
}
