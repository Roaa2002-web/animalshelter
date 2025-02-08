"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPaw, FaDog, FaCat, FaTimes } from "react-icons/fa";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 bg-white dark:bg-gray-900">
      {/* ✅ صورة بتصميم مميز */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/cute-little-kid-home-with-dog-puppy.jpg"
            alt="Kid with Puppy"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>

      {/* ✅ نص الوصف */}
      <div className="md:w-1/2 mt-10 md:mt-0 md:pl-16 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
          <FaPaw className="text-pink-500 mr-2" /> Welcome To Our Pet Adoption Center
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          We are dedicated to helping homeless animals find loving homes. Our center
          provides a safe environment for rescued pets while they wait for their forever families.
          Adopt a pet today and give them the love they deserve!
        </p>

        {/* ✅ قائمة الميزات */}
        <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-200">
          <li className="flex items-center">
            <FaDog className="text-pink-500 text-xl mr-2" /> Variety of Dog Breeds Available
          </li>
          <li className="flex items-center">
            <FaCat className="text-pink-500 text-xl mr-2" /> Loving Cats Ready for Adoption
          </li>
          <li className="flex items-center">
            <FaPaw className="text-pink-500 text-xl mr-2" /> Health Checked & Vaccinated Pets
          </li>
          <li className="flex items-center">
            <FaPaw className="text-pink-500 text-xl mr-2" /> Support & Guidance for New Pet Owners
          </li>
        </ul>

        {/* ✅ زر للمزيد من المعلومات */}
        <div className="mt-6">
          <button
            className="px-6 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-full font-semibold shadow-md transition duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* ✅ نافذة منبثقة بشكل وجه قطة */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white dark:bg-gray-800 p-8 rounded-full w-80 h-80 flex flex-col items-center shadow-lg animate-pop-up">
            {/* أذني القطة */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-pink-500 rounded-tl-full transform rotate-45"></div>
            <div className="absolute -top-6 right-8 w-12 h-12 bg-pink-500 rounded-tr-full transform -rotate-45"></div>

            {/* زر الإغلاق */}
            <button
              className="absolute top-4 right-4 text-gray-700 dark:text-white hover:text-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes size={20} />
            </button>

            {/* محتوى النافذة */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8">More About Adoption</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mt-2 px-4">
              Our adoption process ensures pets find loving homes. We provide support for new pet parents to make adoption easy and fulfilling!
            </p>

            {/* مخالب القطة */}
            <div className="absolute bottom-4 flex space-x-4">
              <FaPaw className="text-pink-500 text-3xl" />
              <FaPaw className="text-pink-500 text-3xl" />
            </div>
          </div>
        </div>
      )}

      {/* ✅ أنيميشن النبثاق */}
      <style jsx>{`
        @keyframes pop-up {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-pop-up {
          animation: pop-up 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
