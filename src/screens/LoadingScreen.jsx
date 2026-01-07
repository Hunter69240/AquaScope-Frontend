import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import {
  getScientificName,
  getCommonNames,
  getKingdom,
  getPhylum,
  getClass,
  getOrder,
  getFamily,
  getGenus,
  getDescription,
  getAllImages,
  getDistribution,
  getHabitatAndMigration,
  getLifeCycleAndSize,
  getUses,
  getThreatsAndDiseases,
  getIdentifier,
  getAllThumbnails,
  getThreeDStatusStatus
} from "../components/DataCleaning/DataCleaners";

export default function LoadingScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Data received from SearchBar
  const fishName = location.state?.fishName;
  const hasError = location.state?.error;
  const errorMessage = location.state?.errorMessage;

  const [error, setError] = useState(null);

  useEffect(() => {
    // Validation error coming from SearchBar
    if (hasError) {
      setError(errorMessage || "Invalid fish name");
      return;
    }

    // Safety check (direct URL access)
    if (!fishName) {
      setError("No fish name provided");
      return;
    }

    async function fetchFishData() {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const API_TOKEN = import.meta.env.VITE_API_TOKEN;

        if (!API_URL || !API_TOKEN) {
          throw new Error("API configuration is missing. Please contact support.");
        }

        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ common_name: fishName }),
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Error ${response.status}: ${errText}`);
        }

        const rawData = await response.json();

        //  No valid fish data
        if (!rawData?.response?.taxon) {
          throw new Error("Fish species not found. Please try another name.");
        }

        const organizedData = {
          identifier: getIdentifier(rawData),
          Scientificname: getScientificName(rawData),
          Commonname: getCommonNames(rawData),
          Kingdom: getKingdom(rawData),
          Phylum: getPhylum(rawData),
          Class: getClass(rawData),
          Order: getOrder(rawData),
          Family: getFamily(rawData),
          Genus: getGenus(rawData),
          Description: getDescription(rawData),
          Images: getAllImages(rawData),
          Distribution: getDistribution(rawData),
          HabitatandMigration: getHabitatAndMigration(rawData),
          LifeCycleAndSize: getLifeCycleAndSize(rawData),
          Uses: getUses(rawData),
          ThreatsAndDiseases: getThreatsAndDiseases(rawData),
          Thumbnails: getAllThumbnails(rawData),
          ThreeDStatus: getThreeDStatusStatus(rawData),
        };

        //  Navigate to Fish Info page
        setTimeout(() => {
          navigate("/fishinfo", {
            state: {
              data: organizedData,
              fishName,
            },
          });
        }, 400);

      } catch (err) {
        console.error("API fetch failed:", err);

        if (
          err.message.includes("Failed to fetch") ||
          err.message.includes("NetworkError")
        ) {
          setError("Network error. Please check your internet connection.");
        } else if (err.message.includes("404")) {
          setError("Fish species not found. Please try another name.");
        } else if (
          err.message.includes("500") ||
          err.message.includes("503")
        ) {
          setError("Server is temporarily unavailable. Please try later.");
        } else {
          setError(err.message || "Unexpected error occurred.");
        }
      }
    }

    fetchFishData();
  }, [fishName, hasError, errorMessage, navigate]);

  //  Error UI
  if (error) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "radial-gradient(circle at center, #B3E5FC 55%, #0288D1 100%)",
        }}
      >
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md mx-4 text-center">
          <div className="text-6xl mb-4">🐠</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Invalid Search
          </h2>
          <p className="text-gray-600 mb-6">
            Please enter a valid fish name and try again.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
            <p className="text-sm text-red-700">{error}</p>
          </div>
          <button
            className="bg-gradient-to-r from-[#039BE5] via-[#4DD0E1] to-[#B3E5FC]
                       text-white px-6 py-3 rounded-full font-semibold shadow-lg
                       hover:from-[#0288D1] hover:via-[#00B8D4] hover:to-[#80DEEA]
                       transition-all duration-200"
            onClick={() => navigate("/")}
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  //  Loader UI
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="Loading-screen.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Loader />
      </div>
    </div>
  );
}
