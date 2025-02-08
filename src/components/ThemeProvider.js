"use client"; 
import { useEffect } from "react";

export default function ThemeProvider() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedDarkMode = localStorage.getItem("darkMode") === "true";
      document.documentElement.classList.toggle("dark", storedDarkMode);
    }
  }, []);

  return null; // لا نحتاج إلى إرجاع أي عنصر
}
