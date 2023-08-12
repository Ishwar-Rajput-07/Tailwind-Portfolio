import React from 'react'
import Navbar from './componants/Navbar'
import Home from './pages/Home'
import Brands from './pages/Brands'
import Service from './pages/Service'
import Resume from './pages/Resume'
import MyProject from './pages/MyProject'
import Customer from './pages/Customer'
import NewsData from './pages/NewsData'
import Footer from './pages/Footer'

const App = () => {
  return <div className='bg-gray-950'>
    <Navbar />
    <Home />
    <Brands />
    <Service />
    <Resume />
    <MyProject />
    <Customer />
    <NewsData />
    <Footer />
  </div>
}

export default App