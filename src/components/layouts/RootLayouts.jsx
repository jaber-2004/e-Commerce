import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Sharcebar from './Searchbar'


const RootLayouts = () => {
  return (
   <>
   <Header/>
   <Sharcebar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default RootLayouts