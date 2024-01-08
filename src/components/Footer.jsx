import footerImg from '../assets/img/image2.png';
import {FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


const Footer = () => {
    return (
        <section className="bg-[#f89f1d]">
            <footer className="max-w-[1440px] mx-auto flex justify-between px-10 pt-10 lg:pt-0">
                <div className="w-full flex flex-col justify-center gap-10 lg:gap-24">
                    <form>
                        <div className="relative w-full lg:w-3/4">
                            {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div> */}
                            <input type="email" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Enter your email" required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#fd6110] hover:bg-[#fd6110] hover:brightness-75 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Subscribe <FaArrowRightLong className='inline' /></button>
                        </div>
                    </form>
                    <div className='flex flex-col-reverse items-center lg:items-start lg:flex-row justify-between content-end'>
                        <div className='my-10 text-center space-y-10 lg:space-y-0 lg:my-0 lg:text-start'>
                            <h1 className='text-3xl font-bold'>pti<span className='text-[#fd6110]'>.</span></h1>
                            <h2 className="text-xl font-bold lg:ml-2">Copyright&copy;Tripp.All Right Reserved</h2>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2'>
                                <div className='bg-[#feddba] text-[#fd6110] text-xl rounded-full p-3 hover:cursor-pointer hover:bg-[#fd6110] hover:text-white'>
                                    <FaGoogle />
                                </div>
                                <div className='bg-[#feddba] text-[#fd6110] text-xl rounded-full p-3 hover:cursor-pointer hover:bg-[#fd6110] hover:text-white'>
                                    <FaTwitter />
                                </div>
                                <div className='bg-[#feddba] text-[#fd6110] text-xl rounded-full p-3 hover:cursor-pointer hover:bg-[#fd6110] hover:text-white'>
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className='hidden lg:flex justify-center w-full'>
                    <img src={footerImg} alt="" />
                </figure>
            </footer>
        </section>
    )
}

export default Footer