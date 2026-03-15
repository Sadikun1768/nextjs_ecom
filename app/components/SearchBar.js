"use client";
import React, { useContext } from 'react'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import CartIcon from './CartIcon';
import { CartContext } from '../context/CartContext';


export default function SearchBar() {
  const { cart } = useContext(CartContext);
  return (
    <div>
       <nav>
            <ul className='text-white flex items-center justify-between gap-4 hover:bg-emerald-800'>
                <li><Link href="/cart"><CartIcon count={cart.length} /></Link></li>
                <li className='text-white'><Link href="/signin">Sign In</Link></li>
                <li className='text-white'><Link href="/signout">Sign Out</Link></li>    
            </ul>
        </nav>
    </div>
  )
}
