import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../configs/axios'
import styles from './card.module.css'

import rating from '../../assets/rating.png'

const ProductCard2 = () => {
    const [product, setProduct] = useState([])

    async function fetchData(){
        try {
            const result = await axios({
                method: 'GET',
                url: '/product'
            })
            setProduct(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <section className={styles.section}>
            <div  className='container'>
                <div className={styles.title}>
                    <h2>New</h2>
                    <h4>You've never seen it before!</h4>
                </div>
                <div className={styles.content}>
                    {product.map((item)=> (
                        <div className={styles.wrapper}>
                            <div className='card' style={{width: '200px'}}>
                                <Link to='/' className={styles.link}>
                                    <div className={styles['image-wrapper']}>
                                        <img  src={item.image} alt='product' />
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
                    ))}
                </div>
            </div>
        </section>

    //   <div className={styles.wrapper}>
    //     <div className='card' style={{width: '200px', height: '300px'}}>
    //       <Link to='/productlist' className={styles.link}>
    //         <div className={styles['card-body']}>
    //           <h5 className='card-title'>Men's formal suit - Black & White</h5>
    //           <p className='card-text'>$ 40.0</p>
    //           <p className='card-text'>Zalora Cloth</p>
    //           <img src={rating} alt='rating' />
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    )
  }

export default ProductCard2