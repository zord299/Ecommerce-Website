import Image from "next/image";
export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <div
        className="h-screen w-full bg-cover bg-fixed flex justify-center items-center"
        style={{
          backgroundImage: "url('/McLaren.jpg')",
        }}
      >
        <span className="text-white text-4xl sm:text-5xl font-bold">Contact Us</span>
      </div>

      {/* Get in Touch Section */}
      <div
        className="h-auto w-full"
        style={{
          transform: "translate(0px, 10vh)",
        }}
      >
        <div className="flex flex-col items-center gap-5 text-center mx-4 sm:mx-0">
          <span className="text-lg sm:text-xl">Get In Touch</span>
          <span className="text-3xl sm:text-4xl sm:px-40">
            We value the connection with our community and are here to assist in
            any way we can. Feel free to reach out through the following
            channels:
          </span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 px-5 sm:px-20 gap-10 lg:gap-0 h-screen">
          {/* Form Section */}
          <div className="flex justify-center w-full lg:w-1/2">
            <form className="flex flex-col gap-7 w-full sm:w-2/3">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-400 p-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-400 p-4"
              />
              <textarea
                placeholder="Message"
                className="border border-gray-400 p-4 resize-y h-40"
              />
              <button className="font-bold border-black border-2 text-black hover:bg-black hover:text-white transition duration-300 h-12 w-28">
                Send
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col w-full lg:w-1/2 gap-5 sm:px-5 ">
            <div className="flex justify-between pb-4">
              <div className="flex flex-col">
                <span className="font-semibold">Phone</span>
                <span>(303) 555-0105</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Email</span>
                <span>mail@example.com</span>
              </div>
            </div>
            <hr />
            <div className="flex flex-col py-5">
              <span className="font-semibold">Address</span>
              <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            </div>
            <hr />
            <div className="flex flex-wrap py-5 gap-4 items-center">
              <span className="font-semibold">Follow us:</span>
              <div className="flex gap-4">
                <Image src="/facebook.png" alt="Facebook Icon" width={30} height={30} />
                <Image src="/x.png" alt="X Icon" width={30} height={30} />
                <Image src="/youtube.png" alt="YouTube Icon" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="pt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31294.586705530863!2d139.67932752892435!3d35.66822451941521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb2eb3108d1%3A0xf11cd9b2395b6677!2sShibuya%20City%2C%20Tokyo%2C%20Japan!5e0!3m2!1sen!2sin!4v1728883833020!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Secure Payments Section */}
      <div className="flex flex-wrap justify-center gap-5 my-10 px-5">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-3 text-center"
          >
            <Image src="/Lock.png" alt="Secure Payments" width={40} height={40} />
            <span className="text-base">Secure Payments</span>
            <span className="w-full sm:w-[200px] text-sm">
              Shop with confidence knowing that your transactions are safeguarded.
            </span>
          </div>
        ))}
      </div>

      {/* Explore Section */}
      <div
        className="h-screen flex justify-end bg-cover bg-fixed"
        style={{ backgroundImage: "url('/Ninja.jpg')" }}
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
    </>
  );
}
