import React from 'react'
import Image from 'next/image'



function Banner() {
  return (
    <div>
        <Image
      src="/images/bannero.jpg"
      alt="banner image"
      width={1400}
      height={400}
    />
    </div>
  )
}

export default Banner
