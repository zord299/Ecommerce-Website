"use client";

import { useEffect, useState } from "react";
import Card from "../(componets)/Card";
import axios from "axios";

export default function shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("${process.env.NEXT_PUBLIC_API_BASE_URL}/products");
        setProducts(response.data);
        console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div
        className="h-[100vh] w-[100%] bg-cover bg-center mb-5"
        style={{
          backgroundImage: "url('/nature.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="m-10">
        <span>Showing {products.length} results</span>
      </div>
        
      <div className="flex flex-wrap gap-2 justify-center mb-10 mt-10 sm:mb-20">
        {products.map((product: any) => (
          <Card
            key={product.pid}
            name={product.name}
            desc={product.desc}
            imageUrl={product.src}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}
