"use client";

import { useState } from "react";
import Image from "next/image";

export default function EyeModal({ trigger, product }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* trigger button */}
            <button
                className={trigger.className}
                onClick={() => setIsOpen(true)}
            >
                {trigger.label}
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                    <div className="bg-white rounded-lg p-6 w-[700px] max-w-full relative shadow-lg overflow-y-auto max-h-[90vh]">

                        {/* image + text side by side */}
                        <div className="flex gap-6">
                            {/* product image */}
                            <div className="w-1/2">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="rounded"
                                />
                            </div>

                            {/* product details */}
                            <div className="w-1/2">
                                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                                <p className="text-gray-700 mb-2">Code: {product.sku}</p>
                                <p className="text-gray-700 mb-2">Rating: ★ {product.rating} / 5</p>
                                <p className='text-center gap-3'>
                                    <span className='font-bold line-through text-red-600 px-2'>{product.oldprice}Tk</span>
                                    <span className='font-bold px-2'>{product.price}Tk</span>
                                    <span className=''><button className='text-white bg-cyan-500 rounded-sm text-sm p-2'>Save{product.discount}</button></span>
                                </p>

                                <p className="bg-cyan-100 p-2 rounded mb-4">
                                    {product.description}
                                </p>

                                {/* action buttons */}
                                <div className="flex gap-2 mt-4">
                                    <button
                                        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* close button */}
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
