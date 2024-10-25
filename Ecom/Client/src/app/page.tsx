"use client";

import Image from "next/image";
import HomePage from "./(componets)/Homepage";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
