import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/ProductList/ProductList'
import Footer from '../components/Footer/Footer'
import Sidebarmenu from '../components/Sidebarmenu/Sidebarmenu'


function Home() {
    return (
    <div>
        <Header/>
        <Navbar/>
        <Sidebarmenu/>
        <ProductList/>
        <Footer/>
    </div>
)
}

export default Home
