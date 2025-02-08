"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Main() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetch("/imageList.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setImages(data);
        }
      })
      .catch((err) => console.error("Error loading images:", err));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  if (!mounted) return null; // تجنب خطأ Hydration

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.length > 0 && currentIndex < images.length && (
        <>
          {prevIndex !== null && prevIndex < images.length && (
            <motion.div
              key={`prev-${images[prevIndex]}`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                key={`prev-${images[prevIndex]}`}
                src={`/images_show/${images[prevIndex]}`}
                alt="Previous Image"
                layout="fill"
                objectFit="cover"
                priority
                className="w-full h-full"
              />
            </motion.div>
          )}
          <motion.div
            key={`current-${images[currentIndex]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              key={`current-${images[currentIndex]}`}
              src={`/images_show/${images[currentIndex]}`}
              alt="Current Image"
              layout="fill"
              objectFit="cover"
              priority
              className="w-full h-full"
            />
          </motion.div>
        </>
      )}

      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-pink-200 text-center px-6"
        >
          Find Your Perfect Pet Companion! 🐶🐱
        </motion.h1>
      </div>
    </div>
  );
}
