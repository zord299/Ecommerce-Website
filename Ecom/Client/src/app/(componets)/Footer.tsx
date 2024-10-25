import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='p-5 md:p-10 bg-slate-50 w-auto'>
            {/* Responsive container with max width and horizontal padding */}
            <div className='container mx-auto'>
                {/* Flex container for the menu, categories, resources, and social media */}
                <div className='flex flex-col md:flex-row justify-between mb-10'>
                    {/* Menu Section */}
                    <div className='flex flex-col gap-2 md:gap-5 text-lg'>
                        <b>Menu</b>
                        <Link href='/'>Home</Link>
                        <Link href='/'>Shop</Link>
                        <Link href='/'>About Us</Link>
                        <Link href='/'>Contact Us</Link>
                    </div>

                    {/* Categories Section */}
                    <div className='flex flex-col gap-2 md:gap-5 text-lg'>
                        <b>Categories</b>
                        <Link href='/'>Casual</Link>
                        <Link href='/'>Work & Office</Link>
                        <Link href='/'>Activewear</Link>
                        <Link href='/'>Evening Dresses</Link>
                    </div>

                    {/* Resources Section */}
                    <div className='flex flex-col gap-2 md:gap-5 text-lg'>
                        <b>Resources</b>
                        <Link href='/'>Contact Support</Link>
                        <Link href='/'>FAQ</Link>
                        <Link href='/'>Live Chat</Link>
                        <Link href='/'>Returns</Link>
                    </div>

                    {/* Social Media Section */}
                    <div className='text-lg'>
                        <b>Social Media</b>
                        <div className='flex flex-col mt-5 md:mt-10 gap-2 md:gap-4'>
                            <button className='flex items-center gap-2 md:gap-4'>
                                <Image src='/facebook.png' alt="Facebook Icon" width={30} height={30} /> FaceBook
                            </button>
                            <button className='flex items-center gap-2 md:gap-4'>
                                <Image src='/x.png' alt="X Icon" width={30} height={30} /> X
                            </button>
                            <button className='flex items-center gap-2 md:gap-4'>
                                <Image src='/youtube.png' alt="YouTube Icon" width={30} height={30} /> YouTube
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr />

                {/* Footer Section */}
                <div className='flex mt-10 justify-center text-lg md:text-2xl text-gray-400'>
                    <p>Copyright 2024 Cars | Powered by Cars</p>
                </div>
            </div>
        </div>
    );
}
