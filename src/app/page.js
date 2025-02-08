"use client";
import { useEffect, useState } from "react";
import Main from "../components/Main";
import PetList from "../components/PetList";
import About from "../components/About";
import AnimalMessage from "../components/AnimalMessage";
import AnimalBenefits from "../components/AnimalBenefits";
import { FaPaw, FaDog, FaCat, FaFish, FaDove } from "react-icons/fa";
import { useTheme } from 'next-themes';

export default function Home() {
  const [icons, setIcons] = useState([]);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true); // ✅ التأكد من تحميل المكون على العميل فقط

    if (typeof window !== 'undefined') { // ✅ التأكد من التشغيل على العميل
      const newIcons = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}vw`, // ✅ القيم العشوائية بعد التحميل
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 5 + 3}s`,
        icon: getRandomIcon(),
      }));

      setIcons(newIcons);
    }
  }, []);

  // ✅ عدم التصيير حتى يتم تحميل المكون بالكامل
  if (!mounted) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  // ✅ حل مشكلة `theme` غير المعرف أثناء التصيير الأولي
  const activeTheme = theme || resolvedTheme;
  const iconColor = activeTheme === 'dark' ? 'text-pink-200' : 'text-pink-500';

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-white text-gray-900 dark:bg-gray-900 text-gray-100 overflow-hidden">
      <Main />
      <About />
      <hr className="w-1/2 border-t-2 border-pink-500 dark:border-pink-200 my-6" />
      <PetList />
      <hr className="w-1/2 border-t-2 border-pink-500 dark:border-pink-200 my-6" />
      <AnimalBenefits />
      <hr className="w-1/2 border-t-2 border-pink-500 dark:border-pink-200 my-6" />
      <AnimalMessage />

      {/* ✅ الأيقونات المتحركة */}
      {icons.map(({ id, left, delay, duration, icon: Icon }) => (
        <Icon
          key={id}
          className={`absolute text-4xl opacity-30 animate-float ${iconColor}`}
          style={{
            left,
            bottom: "-50px",
            animationDelay: delay,
            animationDuration: duration,
          }}
        />
      ))}

      {/* ✅ أنيميشن CSS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
        .animate-float {
          position: absolute;
          bottom: 0;
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}

// ✅ دالة لاختيار أيقونة عشوائية
function getRandomIcon() {
  const icons = [FaPaw, FaDog, FaCat, FaFish, FaDove];
  return icons[Math.floor(Math.random() * icons.length)];
}
