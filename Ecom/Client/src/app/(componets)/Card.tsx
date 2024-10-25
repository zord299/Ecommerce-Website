'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Card({name, desc, price, imageUrl}:any) {
    const [selectedSize, setSelectedSize] = useState('M')
    const sizes = ['XL', 'L', 'M', 'S', 'XS']
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-4 items-center'>
                <Image src= {imageUrl} alt = {imageUrl} width={400} height={400}></Image>
                <span><b>{name}</b></span>
                <span>{desc}</span>
                <span>{price}</span>
                {/* <span>{imageUrl}</span> */}
            </div>
            <div className='flex m-2'>
                {sizes.map((size) => (
                    <button key={size} className={`m-2 w-12 h-12 border rounded-md flex items-center justify-center ${selectedSize===size ? 'border-black font-bold' : 'border-grey-300'} transition-colors duration-300 hover:border-black`}
                        onClick={() => setSelectedSize(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>

        </div>
    );
}