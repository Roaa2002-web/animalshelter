"use client";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";

export default function AnimalBenefits() {
  const benefits = [
    {
      title: "Reduces Stress & Anxiety",
      description:
        "Interacting with animals helps lower stress levels, reduce anxiety, and enhance overall well-being.",
      image: "/images/woman-carrying-her-pet-subway.jpg",
    },
    {
      title: "Guiding the Visually Impaired",
      description:
        "Service dogs provide crucial assistance to blind individuals, helping them navigate safely and independently.",
      image:
        "/images/guide-dog-helping-blind-man-city-handsome-blind-guy-have-rest-with-golden-retriever-city.jpg",
    },
    {
      title: "Supports Child Development",
      description:
        "Animals help children develop emotional and social skills, especially those with autism or learning difficulties.",
      image: "/images/full-shot-boy-playing-with-dog.jpg",
    },
    {
      title: "Comforts the Elderly",
      description:
        "Pets reduce loneliness in elderly individuals, providing companionship and emotional support.",
      image: "/images/elegant-old-man-sunny-autumn-park.jpg",
    },
  ];

  return (
    <section className="relative bg-white dark:bg-gray-900 px-6 md:px-20 py-16 text-gray-900 dark:text-white text-center overflow-hidden">
      {/* خلفية تحتوي على كفوف حيوانات متناثرة */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <FaPaw
            key={i}
            className="text-pink-300 dark:text-pink-600 opacity-30 absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `fadeIn 1s ease-in-out ${Math.random() * 1.5}s`,
            }}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-pink-500 dark:text-pink-400 flex justify-center items-center mb-8 relative z-10">
        <FaPaw className="text-3xl mr-2" /> The Benefits of Animals in Human Life
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-pink-500 dark:border-pink-400">
              <Image
                src={benefit.image}
                alt={benefit.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{benefit.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 px-4">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* إضافة أنيميشن للكفوف */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
