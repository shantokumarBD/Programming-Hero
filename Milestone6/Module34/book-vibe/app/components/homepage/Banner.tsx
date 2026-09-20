import Image from 'next/image'
import React from 'react'
import banner from "../../assets/hero_img.jpg"

const Banner = () => {
  return (
    <div className="container mx-auto mt-6 md:mt-10 px-4 md:px-5 lg:px-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 bg-base-200 rounded-3xl p-6 py-10 md:px-12 lg:px-24 md:py-16 lg:py-20">
            <div className="flex-1 space-y-6 md:space-y-8 lg:space-y-10 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-base-content">
                    Books to freshen up <br className="hidden lg:block" /> your bookshelf
                </h1>
                <button className="btn btn-primary text-white text-base md:text-lg px-6 md:px-8 h-12 md:h-14">View The List</button>
            </div>
            <div className="flex-1 flex justify-center md:justify-end w-full">
                <div className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px]">
                    <Image src={banner} width={400} height={400} alt="banner" className="w-full h-auto drop-shadow-2xl rounded-lg object-contain" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner