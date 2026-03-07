import React from 'react'
import Link from 'next/link'



export default function SearchBar() {
  return (
    <div>
       <nav>
            <ul className='text-white flex items-center justify-between gap-4 hover:bg-emerald-800'>
                <li><Link href="/signin">Sign In</Link></li>
                <li><Link href="/signout">Sign Out</Link></li>    
            </ul>
        </nav>
    </div>
  )
}
