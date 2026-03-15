"use client";

import React, { useContext } from 'react'
import Container from '../components/Container'
import { CartContext } from '../context/CartContext'

export default function CartPage(){
 const { cart } = useContext(CartContext);

    return (
        <Container>
            <div className='mt-5'>
                <h3 className='my-5 bg-blue-950 text-amber-50 p-2'>Cart List</h3>
                {cart.length === 0 ?(
                    <p>cart is empty</p>
                ) : (
                    <ul>
                        {cart.map((item, i) => (
                            <li key={i}>{item.name}- {item.price}</li>
                        ))}
                    </ul>
                )
            }
            </div>

        </Container>
    )

}


