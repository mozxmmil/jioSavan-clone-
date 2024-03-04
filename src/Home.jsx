import React from 'react'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import SearchBarComponent from './components/SearchBarComponent'
const Home = () => {
  return (
    <>
    <Navbar/>
    <SearchBarComponent/>
    <MainSection/>
    <Footer/>
    
    </>
  )
}

export default Home