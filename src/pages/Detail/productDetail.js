import React from 'react'
import Navbar from '../../components/Navbar'
import Detail from '../../components/Detail/detail'
import Description from '../../components/Detail/description'
import ProductCards from '../../components/ProductCard2'

const ProductDetail = () => {
  return (
    <div>
        <Navbar />
        <div className='container'>
            <div style={{display: 'flex'}}>
                <img src='#' alt=''/>
                <Detail />
            </div>
            <Description />
            <img src='#' alt=''/>
            <ProductCards />
        </div>
    </div>
  )
}

export default ProductDetail