import React from 'react'
import NavbarComponent from '../Layout/NavbarComponent'
import { Outlet } from 'react-router'


export default function Root() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
   
    </div>
  )
}