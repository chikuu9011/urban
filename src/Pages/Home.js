import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
// import Cookies from 'js-cookie'


const Home = () => {
 
  
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Home
