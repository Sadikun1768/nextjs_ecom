"use client"; 

import { useState } from "react";

export default function SimpleModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      {/* Trigger button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
       Order Now
      </button>

      {/* Overlay + Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-96 relative">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p className="mb-4">This is a simple modal without ShadCN UI.</p>

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                onClick={() => {
                  alert("Action!");
                  setIsOpen(false);
                }}
              >
                Confirm
              </button>
            </div>

            {/* Close button (optional) */}
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