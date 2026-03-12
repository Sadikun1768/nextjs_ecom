import React from 'react'
import Image from 'next/image'
import products from '@/data/product'




function ProductCard() {
    return (
        <div className='grid grid-cols-4 gap-5 mt-2 p-4'>
            <h4 className='col-span-4 flex text-center justify-center font-bold'>Show All Fruits</h4>



            {products.map((product) => (
                <div key={product.id} className='relative border border-black rounded-sm'>
                     <button
                            className="absolute top-0 start-0 translate-middle-y bg-white text-dark-red rounded-circle p-2 m-3 shadow">
                            <i className="fa-solid fa-eye"></i>
                        </button>
                    <Image
                        className='px-6 h-64 object-cover'
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200}
                    />
                    <div className=''>
                        <p className="bg-cyan-100 text-yellow-500 flex justify-between px-3">★ 0.0 / 5<span>{product.rating}</span></p>
                        <h4 className="text-base px-2 my-2">{product.name}</h4>
                        <p className='px-2'><span className='font-bold'>{product.sku}</span></p>
                        <p className='text-center gap-3'>
                            <span className='font-bold line-through text-red-600 px-2'>{product.oldprice}Tk</span>
                            <span className='font-bold px-2'>{product.price}Tk</span>
                            <span className=''><button className='text-white bg-cyan-500 rounded-sm text-sm p-2'>Save{product.discount}</button></span>
                        </p>
                    </div>

                    <div className='mx-2 py-2'>
                        <button className='bg-blue-950 text-amber-100 rounded-none p-2 hover:bg-emerald-950 hover:text-white w-full px-3 my-3'>
                            Order Now           
                       </button>
                    </div>
                </div>

            ))}



            <div className='col-span-4 flex justify-center'>
                <button className='bg-cyan-600 text-white rounded-lg hover:bg-blue-950 transition-colors duration-200 p-4'>View More </button>
            </div>
        </div>


    )
}

export default ProductCard
