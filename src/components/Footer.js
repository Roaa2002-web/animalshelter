"use client";
import { FaPaw } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTelegram, FaYoutube, FaTiktok, FaBehance, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 p-6 flex flex-col items-center text-center text-gray-900 dark:text-white shadow-xl border-t border-gray-300 dark:border-gray-700">
      <div className="flex items-center text-pink-500 dark:text-pink-300 mb-4 animate-fadeIn">
        <FaPaw className="text-3xl mr-2" />
        <p className="font-bold text-xl tracking-wide">Designed by Roaa</p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm max-w-md leading-relaxed">
        This is a fictional website created for frontend development practice using Next.js.
      </p>

      <div className="border-t border-gray-300 dark:border-gray-700 w-3/4 my-4"></div>

      {/* أيقونات مواقع التواصل الاجتماعي */}
      <div className="flex gap-5 mt-2">
        {[
          { icon: FaInstagram, link: "https://www.instagram.com/roro_animation2002?igsh=MzNlNGNkZWQ4Mg==" },
          { icon: FaFacebook, link: "https://www.facebook.com/share/15BhD6s78S/" },
          { icon: FaTelegram, link: "https://t.me/roaa_animarion" },
          { icon: FaYoutube, link: "https://youtube.com/@roaaanimeation?si=NPIMf9lJhCIDd2L5" },
          { icon: FaTiktok, link: "https://www.tiktok.com/@roaaanimation?_t=8riMbXJDsLy&_r=1" },
          { icon: FaBehance, link: "https://www.behance.net/roaaabdulfattah" },
          { icon: FaLinkedin, link: "https://www.linkedin.com/in/roa-a-abdulfattah-b25181325/" },
        ].map(({ icon: Icon, link }, index) => (
          <a 
            key={index} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-transform transform hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
          >
            <Icon className="text-3xl" />
          </a>
        ))}
      </div>
    </footer>
  );
}
