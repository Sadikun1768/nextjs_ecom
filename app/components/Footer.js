// components/Footer.jsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
       
        <div>
          <Image src="/images/download.jpg" alt="Waqeya Logo" width={70} height={70} />
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
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
          <h6 className="font-bold mb-3">Contact Us</h6>
          <p className="text-gray-700"><i className="fa-solid fa-phone mr-2"></i> 01326870225</p>
          <p className="text-gray-700"><i className="fa-solid fa-envelope mr-2"></i> waqeyashop@gmail.com</p>
          <p className="text-gray-700"><i className="fa-solid fa-location-dot mr-2"></i> Mirpur -2 Dhaka, Bangladesh</p>
          <p className="text-gray-700"><i className="fa-brands fa-whatsapp text-green-600 mr-2"></i> WhatsApp Us</p>
        </div>

       
        <div>
          <h6 className="font-bold mb-3">Quick Links</h6>
          <button className="bg-gray-900 text-white px-4 py-2 rounded mb-3">Order Tracking</button>
          <div className="space-y-2 text-gray-700 text-sm">
            <p><Link href="#">Shipping Policy</Link></p>
            <p><Link href="#">Returns & Refunds Policy</Link></p>
            <p><Link href="#">Warranty Policy</Link></p>
            <p><Link href="#">Order Policy</Link></p>
            <p><Link href="#">Our Mission</Link></p>
            <p><Link href="#">Our Vision</Link></p>
            <p><Link href="#">Privacy & Policy</Link></p>
            <p><Link href="#">Terms & Conditions</Link></p>
          </div>
        </div>

        <div>
          <h6 className="font-bold mb-3">Let's Connect</h6>
          <Link href="#" className="bg-gray-900 text-white px-4 py-2 rounded">Join Our Facebook</Link>
          <div className="mt-4">
            <div className="flex items-center gap-3">
              <Image src="/images/download.jpg" alt="Waqeya Logo" width={70} height={70} />
              <p className="text-gray-700">WAQEYA</p>
            </div>
            <Link href="#" className="mt-3 inline-block border border-green-600 text-green-600 px-4 py-2 rounded">
              <i className="fa-brands fa-facebook mr-2"></i> Follow Page
            </Link>
          </div>
        </div>
      </div>

 
      <div className="bg-gray-900 text-white text-center py-3 text-sm">
        <Link href="#">© 2026 WAQEYA | Developed By Service Key.</Link>
      </div>
    </footer>
  );
}

