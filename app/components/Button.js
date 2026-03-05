"use client";

export default function Button({
    type = "button",
    onClick,
    className = "",
    children
}) {
    return (
        <div>

            <button
                type={type}
                onClick={onClick}
                className={`p-3 rounded-b-md font-medium transition duration-100
        bg-cyan-800 text-white hover:bg-cyan-500 active:scale-50 mt-4`}

            >

                {children}
            </button>

        </div>
    )
}
