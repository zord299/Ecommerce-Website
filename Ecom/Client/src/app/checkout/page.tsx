import Image from "next/image";

export default function Checkout() {
  return (
    <div>
      <header className="min-h-[500px] bg-cover bg-fixed h-screen w-full" style={{
        backgroundImage: "url('/CyberPunkCar.jpg')"
      }}>
        <div className="container mx-auto w-[960px]">
          <div className="flex justify-between items-center py-12 text-[#246eea] text-sm font-bold uppercase tracking-wide">
            <div className="flex items-end text-[#afb5c0]">
              <i className="icon-shield text-lg leading-[20px]"></i>
              
            </div>
          </div>
          <div className="text-center text-2xl font-semibold">Complete Your Purchase</div>
        </div>
      </header>
      <section className="block z-[9999]">
        <div className="container mx-auto w-[960px]">
          <div className="details shadow-lg max-w-[800px] min-h-[300px] mx-auto -mt-52 bg-white rounded-lg flex flex-col relative">
            <div className="flex">
              <div className="item__image flex items-center justify-center">
                <Image className="mt-[-50px] ml-[-100px] w-[200px]" src="/lambo.jpg" alt="" height={100} width={100} />
              </div>
              <div className="p-7">
                <div className="text-2xl font-semibold">Iphone X</div>
                <div className="text-lg text-[#bec3cb]">649,99 £</div>
                <div className="absolute right-[50px] top-[30px] text-lg">Quantity: 1</div>
                <div>
                  <ul className="pl-2">
                    <li>Super fast and power efficient</li>
                    <li>A lot of fast memory</li>
                    <li>High resolution camera</li>
                    <li>Smart tools for health and traveling and more</li>
                    <li>Share your games and achievements with your friends via Group Play</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto w-[960px]">
          <div className="payment pt-5">
            <div className="text-left text-lg font-medium mb-5">Payment Method</div>
            <div className="flex justify-center items-center space-x-4">
              <div className="payment__type border-2 border-gray-300 rounded-lg px-10 py-5 flex justify-center items-center cursor-pointer text-gray-300 transition duration-150 ease-in-out active:border-green-500 active:text-black bg-[#f6fcf7]">
                <i className="icon-credit-card text-2xl mr-2"></i>Credit Card
              </div>
              <div className="payment__type border-2 border-gray-300 rounded-lg px-10 py-5 flex justify-center items-center cursor-pointer text-gray-300 transition duration-150 ease-in-out">
                <i className="icon-paypal text-2xl mr-2"></i>Paypal
              </div>
              <div className="payment__type border-2 border-gray-300 rounded-lg px-10 py-5 flex justify-center items-center cursor-pointer text-gray-300 transition duration-150 ease-in-out">
                <i className="icon-wallet text-2xl mr-2"></i>SEPA
              </div>
              <div className="payment__type border-2 border-gray-300 rounded-lg px-10 py-5 flex justify-center items-center cursor-pointer text-gray-300 transition duration-150 ease-in-out">
                <i className="icon-note text-2xl mr-2"></i>Invoice
              </div>
            </div>

            <div className="flex pt-10">
              <div className="w-[60%]">
                <div className="text-left text-lg font-medium flex items-center mb-5">
                  <i className="icon-user mr-2"></i>Personal Information
                </div>
                <form>
                  <div className="row">
                    <div className="field w-full">
                      <div className="text-sm pb-2">Credit Card Number</div>
                      <input
                        type="text"
                        className="border border-[#e1e8ee] w-full rounded-lg h-12 px-4 font-semibold text-sm text-[#5e6977] focus:border-green-500"
                        value="4542 9931 9292 2293"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <div className="field small w-[100px]">
                      <div className="text-sm pb-2">Expiry Date</div>
                      <select className="input ddl w-full rounded-lg border-2 border-[#e1e8ee]">
                        <option selected>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                    </div>
                    <div className="field small w-[100px]">
                      <div className="text-sm pb-2">Year</div>
                      <select className="input ddl w-full rounded-lg border-2 border-[#e1e8ee]">
                        <option>2023</option>
                        <option selected>2024</option>
                        <option>2025</option>
                      </select>
                    </div>
                    <div className="field small w-[120px]">
                      <div className="text-sm pb-2">
                        CVV Code
                        <span className="ml-1 text-sm">?</span>
                      </div>
                      <input type="text" className="input txt w-full rounded-lg border-2 border-[#e1e8ee] h-12 px-4 font-semibold text-sm" />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="field w-full">
                      <div className="text-sm pb-2">Name on Card</div>
                      <input type="text" className="input txt w-full rounded-lg border-2 border-[#e1e8ee] h-12 px-4 font-semibold text-sm" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-[40%] pl-4">
                <div className="text-left text-lg font-medium flex items-center mb-5">
                  <i className="icon-plane mr-2"></i> Shipping Information
                </div>
                <div className="bg-[#f6f9fc] p-5 rounded-lg border border-gray-200">
                  <div className="user__name">
                    John Doe
                    <br /> 13/03/1980
                  </div>
                  <div className="user__address">
                    Shipping Address: 22 Street, Address
                    <br />
                    Country
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto w-[960px]">
          <div className="flex flex-col items-center justify-center py-16">
            <a href="#" className="btn bg-[#246eea] text-white rounded-lg px-16 py-5 uppercase text-base font-semibold transition-transform transform hover:translate-y-[-2px]">
              Place your Order
              <i className="icon-arrow-right-circle ml-2"></i>
            </a>
            <a href="/shop" className="mt-4 text-sm text-[#a0a0a0]">Go Back to Shop</a>
          </div>
        </div>
      </section>
    </div>
  );
}
