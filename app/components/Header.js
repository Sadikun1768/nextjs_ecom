import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  return (
<header className='border border-amber-300'>

     <Container className='flex items-center justify-between bg-cyan-950'>

       <Logo />

       <HeaderMenu />

    <div className='text-white'>
      Others
    </div>



    </Container>

</header>
   
  )
}
