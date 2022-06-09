import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Detail from '../../components/Detail/detail'
import Description from '../../components/Detail/description'
import ProductCards from '../../components/ProductCard2'
import axios from '../../configs/axios'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const {id} = useParams()
  const [product, setProduct] = useState([])

  async function fetchData(){
    try {
      const result = await axios({
          method: 'GET',
          url: `/product/${id}`
      })
      setProduct(result.data.data[0])
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  })

  return (
    <div>
        <Navbar />
        <div className='container'>
            <div style={{display: 'flex'}}>
              <div style={{width: '30%', marginRight: '20px'}}>
                <img src={product.image} alt='' style={{width: '100%'}}/>
              </div>
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