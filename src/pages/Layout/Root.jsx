import React from 'react'
import NavbarComponent from '../Layout/NavbarComponent'
import { Outlet } from 'react-router'
import Footer from '../Layout/Footer'


export default function Root() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <Footer/>
    </div>
  )
}