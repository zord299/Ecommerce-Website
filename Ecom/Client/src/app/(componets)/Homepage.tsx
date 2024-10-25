import Image from "next/image";
import Card from "./Card";

export default function HomePage() {
  return (
    <div className="h-auto w-auto relative">
      <div
        className="h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/nature.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Most Popular Section */}
      <div className="flex justify-center m-5 p-5 text-xl sm:text-2xl">
        Most Popular
      </div>
      <div className="flex flex-wrap gap-2 justify-center mb-10 sm:mb-20">
        <Card
          title="Beautiful Mustang"
          name="Explore the beauty of this Mustang"
          imageUrl="/mustang.jpg"
          price="1cr"
        />
        <Card
          title="Beautiful Supra"
          name="Explore the beauty of this Supra"
          imageUrl="/supra.jpg"
          price="1cr"
        />
        <Card
          title="Beautiful Glider"
          name="Explore the beauty of this Glider"
          imageUrl="/cyberpunk1.jpg"
          price="1cr"
        />
        <Card
          title="Beautiful Muscle"
          name="Explore the beauty of this Muscle car"
          imageUrl="/cyberpunk2.jpg"
          price="1cr"
        />
      </div>

      {/* Full-Width Section with Background Image */}
      <div className="h-auto sm:h-screen sm:w-full md:w-full">
        <div
          className="w-full h-full bg-cover bg-center flex justify-end"
          style={{
            backgroundImage: "url('/peakpx.jpg')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="flex flex-col w-[90%] sm:w-[50%] lg:w-[20vw] text-white items-center gap-3 m-5 sm:m-10">
            <Image src="/blackMuscleCar.jpg" alt="" width={300} height={300} />
            <span className="text-base sm:text-lg text-center">
              Explore More of our exquisite cars
            </span>
            <button className="font-bold border-white border-2 text-white hover:bg-white transition duration-300 hover:text-black h-10 w-28">
              More
            </button>
          </div>
        </div>
      </div>

      {/* Drift Cars Section */}
      <div className="flex flex-col lg:flex-row justify-between lg:h-screen">
        <div className="flex flex-col lg:w-2/3 gap-3 m-3 p-5">
          <span className="text-lg sm:text-2xl lg:text-4xl">
            Professional Drift Cars
          </span>
          <span className="text-sm sm:text-base">
            Drift cars are specially modified vehicles designed for controlled
            oversteering and sideways driving, often seen in motorsport
            competitions and exhibitions.
          </span>
          <button className="font-bold border-black border-2 text-black hover:bg-black hover:text-white transition duration-300 h-10 w-28">
            More
          </button>
        </div>
        <div className="w-full flex justify-end">
          <Image
            src="/mazdaDrifting.jpg"
            alt=""
            width={550}
            height={400}
            unoptimized
          />
        </div>
      </div>

      {/* Cars with Fixed Background Section */}
      <div className="h-screen relative w-full">
        <div className="flex flex-col w-[90%] sm:w-2/3 gap-3 sm:p-10 absolute transform left-[50%] -translate-x-1/2 top-[-150px]">
          <Image
            src="/lambo.jpg"
            alt="Exciting new car"
            width={550}
            height={400}
          />
          <span className="text-white text-base sm:text-2xl">
            Discover the allure of cars
          </span>
          <button className="font-bold border-white border-2 text-white hover:bg-white transition duration-300 hover:text-black h-10 w-28">
            Shop More
          </button>
        </div>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/YellowBee.jpg')",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>

      {/* Newest Cars Section */}
      <div className="flex justify-center m-5 p-5 text-xl sm:text-2xl">
        Newest Cars
      </div>
      <div className="flex flex-wrap gap-2 justify-center mb-10 sm:mb-20">
        <Card
          title="Beautiful Mustang"
          name="Explore the beauty of this Mustang"
          imageUrl="/mustang.jpg"
          price="1cr"
        />
        <Card
          title="Beautiful Supra"
          name="Explore the beauty of this Supra"
          imageUrl="/supra.jpg"
          price="1cr"
        />
        <Card
          title="Beautiful Glider"
          name="Explore the beauty of this Glider"
          imageUrl="/cyberpunk1.jpg"
          price="1cr"
        />
        <Card
          title="Beautiful Muscle"
          name="Explore the beauty of this Muscle car"
          imageUrl="/cyberpunk2.jpg"
          price="1cr"
        />
      </div>

      {/* Review Section */}
      <div
        className="h-screen flex justify-center items-center bg-fixed bg-cover"
        style={{ backgroundImage: "url('/AstonMartinDB9.jpg')" }}
      >
        <span className="text-white text-sm md:text-lg w-[90%] md:w-2/3 text-center">
          ”FemmeWardrobe is my fashion sanctuary! The curated collection blends
          chic trends with timeless elegance. The quality is unmatched, and I
          love their commitment to sustainability.”
        </span>
      </div>

      {/* Secure Payments Section */}
      <div className="flex flex-wrap justify-center gap-5 my-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <Image src="/Lock.png" alt="" width={40} height={40} />
          <span className="text-base">Secure Payments</span>
          <span className="w-[90%] sm:w-[200px] text-center text-sm">
            Shop with confidence knowing that your transactions are safeguarded.
          </span>
        </div>
      </div>

      {/* Shop Now Section */}
     <div 
        className="h-screen flex justify-end bg-cover bg-fixed"
        style={{ backgroundImage: "url('/CyberPunkCar.jpg')" }}
      >
        <div className="flex flex-col w-[90%] sm:w-1/2 mt-5 sm:mt-10 gap-3 p-3 sm:p-5">
          <span className="text-white text-lg sm:text-2xl">Explore</span>
          <span className="text-white text-base sm:text-3xl">
            Elevate your wardrobe, embrace timeless style!
          </span>
          <span className="text-white text-sm">
            Explore our collections today and experience the joy of fashion.
            Shop now for chic sophistication!
          </span>
          <button className="w-28 h-10 text-white border-2 hover:bg-white hover:text-black transition">
            <b>SHOP NOW</b>
          </button>
        </div>
      </div>
    </div>
  );
}
