import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className='text-white flex items-center justify-between'>
        <nav>
            <ul className='text-white flex items-center justify-between gap-4 hover:bg-emerald-800'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/posts">Posts</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/contactus">Contact Us</Link></li>
            </ul>
        </nav>


    </div>
  )
}
