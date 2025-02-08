import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import Confetti from "react-confetti";

export default function PetCard({ pet }) {
  const [flipped, setFlipped] = useState(false);
  const [isAdopted, setIsAdopted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSadFaces, setShowSadFaces] = useState(false);

  useEffect(() => {
    const adoptedPets = JSON.parse(localStorage.getItem("adoptedPets")) || {};
    setIsAdopted(adoptedPets[pet.id] || false);
  }, [pet.id]);

  const toggleAdoption = () => {
    const newStatus = !isAdopted;
    setIsAdopted(newStatus);

    const adoptedPets = JSON.parse(localStorage.getItem("adoptedPets")) || {};
    adoptedPets[pet.id] = newStatus;
    localStorage.setItem("adoptedPets", JSON.stringify(adoptedPets));

    if (newStatus) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      setShowSadFaces(true);
      setTimeout(() => setShowSadFaces(false), 3000);
    }
  };

  return (
    <motion.div
      className="relative w-64 h-80 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {showConfetti && <Confetti width={300} height={300} />}

      {showSadFaces && (
        <div className="absolute inset-0 flex flex-wrap items-center justify-center pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <span
              key={i}
              className="absolute text-3xl animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              😢
            </span>
          ))}
        </div>
      )}

      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute w-full h-full flex items-center justify-center rounded-lg shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={pet.image_url}
            alt={pet.name}
            width={256}
            height={320}
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        <div
          className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-4"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {pet.name} (الاسم)
          </h3>
          <p className="text-gray-600 dark:text-gray-300">Type: {pet.type} (النوع)</p>
          <p className="text-gray-600 dark:text-gray-300">Breed: {pet.breed} (السلالة)</p>
          <p className="text-gray-600 dark:text-gray-300">Gender: {pet.gender} (الجنس)</p>
          <p className="text-gray-600 dark:text-gray-300">Age: {pet.age} years old (العمر)</p>
          <p className="text-gray-600 dark:text-gray-300">Weight: {pet.weight} kg (الوزن)</p>

          <p className="text-gray-600 dark:text-gray-300">
            {isAdopted ? "🐶 تم التبني ✅" : "🔍 متاح للتبني"}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleAdoption();
            }}
            className={`mt-4 p-3 rounded-full text-white font-semibold transition flex items-center justify-center text-2xl ${
              isAdopted ? "bg-red-500 hover:bg-red-700" : "bg-pink-500 hover:bg-pink-700"
            }`}            
          >
            <FaPaw />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px);
            opacity: 1;
          }
          100% {
            transform: translateY(300px);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall 2s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}
