import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  return (
<header className='bg-cyan-950 py-2 border border-amber-300'>

     <Container className='flex items-center justify-between'>

       <Logo />

       <HeaderMenu />

    <div className='text-white'>
      Others
    </div>



    </Container>

</header>
   
  )
}
