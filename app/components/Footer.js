import React from 'react'
import Container from './Container'
import Logo from './Logo'

export default function Footer() {
  return (
  <footer>
     <Container>
         <div className=' grid grid-cols-4 mt-10'>

        <div className=''>
          <Logo />
          <p className='mb-4'>Featuring stories about species protection, climate change, renewable energy, and more! Together, we can spread environmental awareness and keep our planet clean. Save The Date Sep-16.</p>
        </div>


        <div>

          <h3><a href='#' className='bg-black  text-white p-2 mb-2'>Quick Links</a></h3>
         <div>
          
           <p className='text-gray-500 group-hover:text-white '>Shipping Policy</p>
          <p>Returns & Refunds Policy</p>
          <p>Warranty Policy</p>
          <p>Privacy & Policy</p>
          <p>Our Vision</p>
          <p>Warranty Policy</p>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
         </div>
        </div>


        <div>
          <h4><a href='#' className='bg-black text-white p-2 mb-2'>Quick Links</a></h4>
          <p>Warranty Policy</p>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>

        </div>



        <div>
          <h4 className='bg-black  text-white p-2 mb-2'>Let's Connect</h4>
         <p>Warranty Policy</p>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>

        </div>
      
     

         </div>
        
     </Container>
  </footer>
   
  )
}
