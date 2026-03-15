import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function CartIcon({ count }) {
  return (
    <div className='relative'>
      <FaShoppingCart className='text-white text-2xl'/>
       {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
          {count}
        </span>
      )}
    </div>
  )
}

export default CartIcon
