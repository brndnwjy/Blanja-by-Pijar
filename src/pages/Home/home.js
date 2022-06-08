import React from 'react'
import CategoryCards from '../../components/CategoryCard2'
import ProductCards from '../../components/ProductCard2'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <CategoryCards />
        <ProductCards />
    </div>
  )
}

export default Home