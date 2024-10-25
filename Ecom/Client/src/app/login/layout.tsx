"use client";

import { useEffect, useState } from "react";
import Navbar from "../(componets)/Navbar";
import Footer from "../(componets)/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoginPage, setIsLoginPage] = useState(false);

  // Track page changes and determine if it's the login page
  useEffect(() => {
    setIsLoginPage(pathname === "/login");
  }, [pathname]); // Only run this when pathname changes
  return (
    <>
      {/* Conditionally render the Navbar and Footer based on the current route */}
      {!isLoginPage && <Navbar />}
      {children}
      {!isLoginPage && <Footer />}
    </>
  );
}
