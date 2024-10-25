"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartCard from "./CartCard";

export default function Page() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);

  const toggleSearchBar = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleSearchBar1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  return (
    <div className="absolute z-10 flex flex-col w-[100%]">
      {/* Container for content */}
      <div className="flex flex-col lg:flex-row lg:justify-between h-full p-5 lg:ml-20">
        {/* Navigation Links */}
        <div className="flex gap-4 sm:gap-8 mt-4 sm:mt-6 lg:mt-12">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-8 text-sm sm:text-lg font-bold text-white">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/aboutus">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Search bar, icons, and buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:mr-20 mt-6 lg:mt-10 "
          style={{
            alignItems: "flex-start",
          }}
        >
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-4 sm:gap-8 rounded-md text-sm sm:text-lg font-bold"
          >
            <input
              type="text"
              placeholder="Type to search..."
              className={`ml-3 transition-all duration-300 ease-in-out ${
                isExpanded
                  ? "w-40 sm:w-48 lg:w-64 opacity-100 p-2"
                  : "w-0 opacity-0"
              } border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300`}
            />
            <button onClick={toggleSearchBar}>
              <Image
                src="/search.png"
                alt="Search Icon"
                width={25}
                height={25}
              />
            </button>
          </form>

          {/* Icons: Cart, Notification, Profile */}
          <div className="flex gap-2 sm:gap-4 align-top">
            <button className="ml-1 sm:ml-3" onClick={toggleSearchBar1}>
              <Image src="/cart.png" alt="Cart Icon" width={25} height={25} />
            </button>
            <button className="ml-1 sm:ml-3">
              <Image
                src="/notification.png"
                alt="Notification Icon"
                width={25}
                height={25}
              />
            </button>

            <Link href="/login" className="ml-1 sm:ml-3">
              <Image
                src="/profile.png"
                alt="Profile Icon"
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div
            className={`ml-3 transition-all  ease-in-out ${
              isExpanded1
                ? "w-[400px] sm:w-48 lg:w-[400px] opacity-100 p-2 h-screen translate-x-[100px] -translate-y-[60px] overflow-y-auto"
                : "w-0 opacity-0 translate-x-0 translate-y-0"
            } border border-gray-300 rounded bg-white z-10`}
          >
            <CartCard
              img="/cart.png"
              name="Good"
              price="500"
              isExpanded={isExpanded1}
            ></CartCard>
            <CartCard
              img="/lambo.jpg"
              name="Good"
              price="500"
              isExpanded={isExpanded1}
            ></CartCard>
            <CartCard
              img="/cart.png"
              name="Good"
              price="500"
              isExpanded={isExpanded1}
            ></CartCard>
            <CartCard
              img="/lambo.jpg"
              name="Good"
              price="500"
              isExpanded={isExpanded1}
            ></CartCard>
            <CartCard
              img="/cart.png"
              name="Good"
              price="500"
              isExpanded={isExpanded1}
            ></CartCard>
            <CartCard
              img="/lambo.jpg"
              name="Good"
              price="500"
              isExpanded={isExpanded1}
            ></CartCard>
            <CartCard
              img="/cart.png"
              name="Good"
              price="500"
              isExpanded={isExpanded1}
            ></CartCard>
            <CartCard
              img="/lambo.jpg"
              name="Good"
              price="500"
              isExpanded={isExpanded1}
            ></CartCard>
            <Link href="/checkout" onClick={toggleSearchBar1}>
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
