"use client";
import { useState, useEffect } from "react";
import { FaPaw } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // استرجاع الوضع الليلي عند تحميل الصفحة
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
    document.documentElement.classList.toggle("dark", storedDarkMode);
  }, []);

  // دالة لتبديل الوضع الليلي وتخزينه
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 p-4 flex justify-between items-center">
      {/* شعار الكف */}
      <div className="flex items-center text-pink-500 dark:text-pink-200">
        <FaPaw className="text-3xl mr-2" />
        <h1 className="font-semibold text-2xl">Animals Shelter</h1>
      </div>

      {/* زر تفعيل الوضع الليلي */}
      <button
        onClick={toggleDarkMode}
        className="text-pink-500 dark:text-pink-200 text-2xl p-2 rounded-full focus:outline-none"
      >
        <MdDarkMode />
      </button>
    </nav>
  );
}
