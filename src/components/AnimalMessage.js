"use client";
import Image from "next/image";

export default function AnimalMessage() {
  return (
    <section className="my-12 p-8 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-semibold text-pink-500 mb-4">
        Animals Are Loyal and Loving
      </h2>

      {/* ✅ صورة بدون أي تأثيرات */}
      <div className="flex justify-center mb-6">
        <Image
          src="/images/kitty-cats-pillow.png"
          alt="Cute kittiens"
          width={500} 
          height={500} 
        />
      </div>

      <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
        Animals are not just pets; they are family. Their gentle nature, unconditional love, and unwavering loyalty make them unique companions.
      </p>
      <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
        Their fragility and vulnerability remind us to be kind and gentle with them. Their soft eyes and quiet presence have the power to heal our souls.
      </p>
      <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
        Let us treat them with the love and respect they deserve. They give us so much without asking for anything in return, and they never fail to remind us of the beauty of loyalty and trust.
      </p>
    </section>
  );
}
