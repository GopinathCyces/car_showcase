import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 md:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image src="logo.svg"  alt="logo" width={118} height={18} />
            </div>
        </div>
    </footer>
  )
}

export default Footer