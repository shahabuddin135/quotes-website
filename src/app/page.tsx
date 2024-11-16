"use client";

import React from "react";
import { Marcellus } from 'next/font/google';
import Link from "next/link";

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
});

const HallOfContributors = () => {
  const contributors = [
    "Saba Sarfaraz",
    "Shahabuddin",
    "Darakhshan Imran",
    "Abeera Umair"
  ];

  return (
    <div className={` ${marcellus.className} bg-black text-white min-h-screen flex flex-col justify-center items-center space-y-10`}>
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-center">
        Hall of Contributors
      </h1>

      {/* Contributors List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 max-w-5xl">
        {contributors.map((contributor, index) => (
          <div
            key={index}
            className="border border-gray-600 rounded-lg p-5 text-center transition-all hover:scale-105 hover:shadow-lg"
          >
            <p className="text-xl md:text-2xl font-semibold">{contributor}</p>
          </div>
        ))}
      </div>

      {/* Thank You Section */}
      <div className="text-center space-y-5">
        <p className="text-2xl md:text-3xl font-light italic">
        &quot;Thank you for your invaluable contributions.&quot;
          &quot;Thank you for your invaluable contributions.&quot;
        </p>
        <p className="text-lg md:text-xl font-medium tracking-wide">
          Your efforts are deeply appreciated.
        </p>
      </div>

<Link href="/quotes">
<button className="bg-white text-black p-2 rounded-md hover:opacity-80 active:opacity-70 cursor-pointer">
  Explore Website
</button>
</Link>

    </div>
  );
};

export default HallOfContributors;
