"use client";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { FaPaw } from "react-icons/fa"; // ✅ استيراد أيقونة الكفوف
import PetCard from "./PetCard";

export default function PetList() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("all");
  const [types, setTypes] = useState(["all"]); // ✅ قائمة الأنواع من قاعدة البيانات

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsCollection = collection(db, "pets");
        const petSnapshot = await getDocs(petsCollection);
        const petList = petSnapshot.docs.map((doc) => doc.data());

        // ✅ استخراج الأنواع الفريدة من قاعدة البيانات
        const uniqueTypes = ["all", ...new Set(petList.map((pet) => pet.type))];

        setPets(petList);
        setFilteredPets(petList);
        setTypes(uniqueTypes);
      } catch (error) {
        console.error("Error fetching pets: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  // ✅ تصفية الحيوانات عند اختيار نوع معين
  useEffect(() => {
    if (selectedType === "all") {
      setFilteredPets(pets);
    } else {
      setFilteredPets(pets.filter((pet) => pet.type === selectedType));
    }
  }, [selectedType, pets]);

  return (
    <div className="flex flex-col items-center w-full mt-8 bg-white dark:bg-gray-900  text-gray-900 dark:text-white ">
      {/* جملة مشوقة بالإنجليزية */}
      <h2 className="font-semibold text-xl text-center mb-6 mt-4">
        "Have you ever dreamt of a friend?"
      </h2>


      <h1 className="font-semibold text-2xl">Get friend</h1>

      {/* ✅ أزرار الفلترة بأيقونات الكفوف */}
      <div className="flex gap-4 mt-4">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`flex flex-col items-center justify-center p-3 rounded-full transition ${
              selectedType === type
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-pink-400 dark:bg-gray-700 dark:text-pink-200 dark:hover:bg-pink-500`}
          >
            <FaPaw className="text-2xl" />
            <span className="text-xs mt-1">{type === "all" ? "All" : type}</span>
          </button>
        ))}
      </div>

      {/* ✅ عرض الحيوانات بعد التصفية */}
      <div className="flex flex-wrap gap-8 justify-center p-8 pb-20 sm:p-20">
        {loading ? (
          <p>Loading pets...</p>
        ) : filteredPets.length > 0 ? (
          filteredPets.map((pet, index) => <PetCard key={index} pet={pet} />)
        ) : (
          <p>No pets available for this category.</p>
        )}
      </div>
    </div>
  );
}

