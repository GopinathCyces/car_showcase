"use client"
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find, Book or Rent A Car - Quickly And Easily.</h1>
        <p className="her__subtitle">Streamline Your Car Rental Experience With Our Effortless Booking Process.</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt='hero' fill className='object-contain' />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero