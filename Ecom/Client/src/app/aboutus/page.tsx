export default function AboutUs() {
  return (
    <>
      {/* Section 1 */}
      <div
        className="h-screen w-full bg-cover bg-fixed flex justify-center items-center"
        style={{ backgroundImage: "url('/porsche.jpg')" }}
      >
        <span className="text-white text-4xl sm:text-5xl font-bold">
          About Us
        </span>
      </div>

      {/* Section 2 */}
      <div
        className="h-screen w-full flex bg-cover bg-fixed p-5 sm:p-10"
        style={{ backgroundImage: "url('/CyberPunkCar.jpg')" }}
      >
        <div className="flex flex-col items-start sm:mt-10 w-full">
          <div className="w-full sm:w-1/2 mb-5 sm:mb-0">
            <span className="text-white text-4xl sm:text-6xl">
              From Vision to Vogue: The Birth of FemmeWardrobe
            </span>
          </div>
          <div className="flex flex-col gap-4 text-white w-full sm:w-1/2">
            <span className="text-lg">Our story</span>
            <p>
              Our journey began with a simple yet powerful vision - to redefine
              the way women experience fashion...
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="h-screen w-full bg-cover bg-fixed p-5 sm:p-10"
        style={{ backgroundImage: "url('/maccan.jpg')" }}
      >
        <div className="text-white flex flex-col gap-5 ">
          <span className="text-lg">Quality Assurance</span>
          <span className="text-3xl sm:text-5xl">
            We understand that fashion is an expression of identity...
          </span>
          <p>
            Our journey to excellence begins with meticulous sourcing, where we
            carefully select materials...
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div
        className="h-screen w-full bg-cover bg-fixed p-5 sm:p-10"
        style={{ backgroundImage: "url('/lamboDiablo.jpg')" }}
      >
        <div className="flex flex-col gap-5 text-white w-full sm:w-1/2">
          <span className="text-lg">Customer-Centric Approach</span>
          <span className="text-3xl sm:text-5xl">
            Beyond Fashion: Nurturing a Customer-Centric Experience
          </span>
          <p className="text-base sm:text-xl">
            We believe that the essence of our success lies in the satisfaction
            of our customers...
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <div
        className="h-screen w-full bg-cover bg-fixed p-5 sm:p-10"
        style={{ backgroundImage: "url('/CyberPunk.jpg')" }}
      >
        <div className="flex flex-col text-white gap-4">
          <span className="text-lg">Sustainability Initiatives</span>
          <span className="text-3xl sm:text-5xl">
            Conscious Fashion for a Better Tomorrow
          </span>
          <div className="flex flex-col gap-4 mt-10">
            <span className="w-full sm:w-1/2">
              We recognize the responsibility we hold in shaping a more
              sustainable future for fashion...
            </span>
            <div className="flex flex-col gap-5 text-white w-full sm:w-1/2">
              <p>
                From the careful selection of ethically sourced materials to the
                implementation of environmentally conscious manufacturing...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div
        className="h-screen flex justify-end bg-cover bg-fixed p-5 sm:p-10"
        style={{ backgroundImage: "url('/Ninja.jpg')" }}
      >
        <div className="flex flex-col w-full sm:w-1/2 gap-3 p-3">
          <span className="text-white text-lg sm:text-2xl">Explore</span>
          <span className="text-white text-base sm:text-3xl">
            Elevate your wardrobe, embrace timeless style!
          </span>
          <span className="text-white text-sm">
            Explore our collections today and experience the joy of fashion...
          </span>
          <button className="w-28 h-10 text-white border-2 hover:bg-white hover:text-black transition">
            <b>SHOP NOW</b>
          </button>
        </div>
      </div>
    </>
  );
}
