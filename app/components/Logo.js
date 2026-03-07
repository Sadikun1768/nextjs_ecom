"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


export default function Logo({ children, className= "" })  {
  return (

    
    <div className='flex items-center'> 

    <Image
      src="/images/download.jpg"
      alt="Picture of the author"
      width={40}
      height={40}
    />  
  
       <span className='font-semibold hover:text-amber-500 p-2 text-shadow-black'>Ecomerce</span>

    </div>
  )
}
