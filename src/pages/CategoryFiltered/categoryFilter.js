import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../../configs/axios'
import Navbar from '../../components/Navbar'
import styles from '../../components/ProductCard2/card.module.css'

import rating from '../../assets/rating.png'

const CategoryFilter = () => {
  const {category} = useParams()
  console.log(category)
  const [products, setProducts] = useState([])

  async function fetchData(){
    try {
      const result = await axios({
          method: 'GET',
          url: `/category/${category}`
      })
      console.log(result)
      setProducts(result.data.data)
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
          <div className={styles.content}>
            {products.map((item)=> (
              // <div style={{display: 'flex', flexDirection: 'row'}}>
              <div className={styles.wrapper}>
              <div className='card' style={{width: '200px'}}>
                  <Link to={`/productDetail/${item.product_id}`} className={styles.link}>
                      <div className={styles['image-wrapper']}>
                          <img src={item.image} alt='product' />
                      </div>
                      <div className='card-body'>
                          <div  className={styles['card-body']}>
                              <h5 className='card-title'>{item.product_name}</h5>
                              <p className='card-text'>{item.product_desc}</p>
                              <p className='card-text'>Rp. {item.price}</p>
                              <img src={rating} alt='rating' />
                          </div>
                      </div>
                  </Link>
              </div>
          </div>
          // </div>
          ))}
          </div>
        </div>
    </div>
  )
}

export default CategoryFilter