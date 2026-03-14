"use client";

import { useState } from "react";
import Image from "next/image";

export default function SimpleModal({
  trigger = { label: "Open Modal", className: "btn" },
  product,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2">
      <button
        className={`${trigger.className} bg-blue-500 text-black px-4 py-2 rounded border-2`}
        onClick={() => setIsOpen(true)}
      >
        {trigger.label}
      </button>

      {isOpen && (
        <div className="fixed inset-0 w-full  flex items-center justify-center bg-black/50 backdrop-blur-sm min-h z-50 min-h-[80vh]">
          {/* modal box */}
          <div className="bg-white rounded-lg p-6 w-[600px] max-w-full max-h-[80vh] overflow-y-auto relative shadow-lg ">
            <h2 className="text-xl font-bold mb-4">Order Now</h2>

            <p className="bg-black text-white w-full my-4 p-2">
              অর্ডার করতে চাইলে আপনার নাম, মোবাইল, ঠিকানা দিয়ে অর্ডার কনফার্ম
              বাটনে ক্লিক করুন।।
            </p>

            {/* form fields */}
            <div className="relative mb-2">
              <span className="absolute top-1/2 left-2 -translate-y-1/2">👤</span>
              <input
                type="text"
                className="pl-8 border p-2 w-full"
                placeholder="আপনার নাম লিখুন....."
              />
            </div>

            <div className="relative mb-2">
              <span className="absolute top-1/2 left-2 -translate-y-1/2">📞</span>
              <input
                type="text"
                className="pl-8 border p-2 w-full"
                placeholder="এখানে মোবাইল নম্বর লিখুন....."
              />
            </div>

            <div className="relative mb-2">
              <textarea
                className="border p-2 w-full"
                placeholder="সম্পূর্ণ ঠিকানা লিখুন (থানা ও জেলা সহ)"
              />
            </div>

            {/* product table */}
            <table className="table table-bordered w-full">
              <thead>
                <tr>
                  <th>IMAGE</th>
                  <th>PRODUCT INFORMATION</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={100}
                    />
                  </td>
                  <td>
                    <p>Fresh Fruits Sources</p>
                    <span className="text-green-600">(16000.00 TK)</span>
                    <br />
                    <button type="button" className="bg-gray-800 text-white px-2">+</button>
                    <span className="mx-2">1</span>
                    <button type="button" className="bg-gray-800 text-white px-2">-</button>
                  </td>
                  <td>
                    <button type="button" className="bg-red-600 text-white px-3 py-1 rounded">
                      DELETE
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={100}
                    />
                  </td>
                  <td>
                    <p>Fresh Fruits Sources</p>
                    <span className="text-green-600">(16000.00 TK)</span>
                    <br />
                    <button type="button" className="bg-gray-800 text-white px-2">+</button>
                    <span className="mx-2">1</span>
                    <button type="button" className="bg-gray-800 text-white px-2">-</button>
                  </td>
                  <td>
                    <button type="button" className="bg-red-600 text-white px-3 py-1 rounded">
                      DELETE
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={100}
                    />
                  </td>
                  <td>
                    <p>Fresh Fruits Sources</p>
                    <span className="text-green-600">(16000.00 TK)</span>
                    <br />
                    <button type="button" className="bg-gray-800 text-white px-2">+</button>
                    <span className="mx-2">1</span>
                    <button type="button" className="bg-gray-800 text-white px-2">-</button>
                  </td>
                  <td>
                    <button type="button" className="bg-red-600 text-white px-3 py-1 rounded">
                      DELETE
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* action buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                onClick={() => {
                  alert("Sir Apni ki order korte cassen!");
                  setIsOpen(false);
                }}
              >
                Confirm
              </button>
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
