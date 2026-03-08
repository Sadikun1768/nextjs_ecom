// components/Footer.jsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">


        <div>
          <Image src="/images/download.jpg" alt="Waqeya Logo" width={70} height={70} />
          <p className="mt-3 text-gray-700 text-sm leading-relaxed hover:text-cyan-400 transition-colors duration-200">
            Submit your story.  We love stories about the organizations, products, ideas, & the meaning to you for
            keeping the outdoors clean.the organizations, products, ideas, & the meaning to you for
            keeping the outdoors clean.
          </p>
          <div className="flex gap-4 mt-4 text-green-600">
            <Link href="#"><i className="fa-brands fa-facebook text-2xl"></i></Link>
            <Link href="#"><i className="fa-solid fa-message text-2xl"></i></Link>
          </div>
        </div>

        <div>
          <h6 className="font-bold hover:text-cyan-400 transition-colors duration-200 mb-3">Contact Us</h6>
          <p className="text-black hover:text-cyan-400 transition-colors duration-200"><i className="fa-solid fa-phone  text-green-600 mr-2"></i> 01726870225</p>
          <p className="text-black hover:text-cyan-400 transition-colors duration-200"><i className="fa-solid fa-envelope text-green-700 mr-2"></i> servicekey@gmail.com</p>
          <p className="text-black hover:text-cyan-400 transition-colors duration-200"><i className="fa-solid fa-location-dot  text-green-600 mr-2"></i> Mirpur -2 Dhaka, Bangladesh</p>
          <p className="text-black hover:text-cyan-400 transition-colors duration-200"><i className="fa-brands fa-whatsapp text-green-600 mr-2"></i> WhatsApp Us</p>
        </div>

        <div>
          <h6 className="font-bold text-lg mb-3">Quick Links</h6>
          <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-150 mb-3">Order Tracking</button>
          <div className="space-y-2 text-gray-700 text-sm">
            <p className=" hover:text-cyan-500 transition-colors duration-200"><Link href="#">Shipping Policy</Link></p>
            <p className=" hover:text-cyan-500 transition-colors duration-200"><Link href="#">Returns & Refunds Policy</Link></p>
            <p className=" hover:text-cyan-500 transition-colors duration-200"><Link href="#">Warranty Policy</Link></p>
            <p className=" hover:text-cyan-500 transition-colors duration-200"><Link href="#">Order Policy</Link></p>
            <p className=" hover:text-cyan-500 transition-colors duration-200"><Link href="#">Our Mission</Link></p>
            <p className=" hover:text-cyan-500 transition-colors duration-200"><Link href="#">Our Vision</Link></p>
            <p className=" hover:text-cyan-500 transition-colors duration-200"><Link href="#">Privacy & Policy</Link></p>
            <p className=" hover:text-cyan-500 transition-colors duration-200"><Link href="#">Terms & Conditions</Link></p>
          </div>
        </div>

        <div>
          <h6 className="font-bold hover:text-cyan-400 transition-colors duration-200 mb-3">Let's Connect</h6>
          <Link href="#" className="bg-gray-900 text-white hover:text-cyan-400 transition-colors duration-200 px-4 py-2 rounded">Join Our Facebook</Link>
          <div className="mt-4">
            <div className="flex items-center gap-3">
              <Image
                className="hover:text-cyan-400 transition-colors duration-200"
                src="/images/download.jpg"
                alt="Waqeya Logo"
                width={70}
                height={70}
              />

              <p className="text-gray-700 hover:text-cyan-400 transition-colors duration-200">WAQEYA</p>
            </div>
            <Link href="#" className="mt-3 inline-block border border-white-600 text-green-600 px-4 py-2 rounded">
              <i className="fa-brands fa-facebook hover:text-cyan-400 transition-colors duration-200 mr-2"></i> Follow Page
            </Link>
          </div>
        </div>
      </div>


      <div className="bg-gray-900 text-white text-center hover:text-cyan-400 transition-colors duration-200 py-3 text-sm">
        <Link href="#">© 2026 Service | Developed By Service Key.</Link>
      </div>
    </footer>
  );
}

