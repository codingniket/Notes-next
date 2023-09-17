import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './hero.png'

const Navbar = () => {
  return (
    <nav>
    <Image
        src={Logo}
        alt='Helpdesk'
        width={80}
        quality={100}
      />
    <h1>Notebook</h1>
    <Link href="/">Home</Link>
    <Link href="/create">Create</Link>
    </nav>
  )
}

export default Navbar