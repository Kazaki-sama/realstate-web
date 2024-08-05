"use client"
import { HomeIcon } from '@heroicons/react/16/solid';
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import React, { ReactNode } from 'react'



interface Props{
    children:ReactNode
}


const Appbar = ({children}:Props) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar className="shadow-md" onMenuOpenChange={setIsMenuOpen}>
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Link href='/' className='flex items-center text-primary-400 hover:text-primary-400transition-colors'>
        <HomeIcon className='w-16'/>
        <p className="font-bold text-inherit">realstate</p>
        </Link>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      
    </NavbarContent>
    <NavbarContent justify="end">
      {children}
    </NavbarContent>
    <NavbarMenu>
      

    </NavbarMenu>
  </Navbar>
  )
}

export default Appbar
