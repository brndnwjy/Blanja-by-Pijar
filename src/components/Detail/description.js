import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../configs/axios'
import styles from './detail.module.css'

const Description = () => {
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
    <div className={styles["product-info"]}>
        <p className={styles.title}>Informasi Produk</p>

        <div className={styles.wrapper}>
            <p className={styles.subtitle}>Condition</p>
            <span className={styles.condition}>New</span>
        </div>

        <div className={styles.wrapper}>
            <p className={styles.subtitle}>Description</p>
            <div className={styles.desc}>
                <p>{product.product_desc}</p>
            </div>
        </div>

        <div>
            <p className={styles.title}>Product Review</p>
            <div className={styles["review-tag"]}>
                <div className={styles.review}>
                    <div className={styles["review-score"]}>
                        <p>5.0</p>
                        <span>/10</span>
                    </div>
                    <span>
                        <img src="./assets/media/rating.png" alt='' />
                    </span>
                </div>

                <div>
                    <div className={styles["rate-count"]}>
                        <div>
                            <img src="./assets/media/Star.png" alt='' />
                            <span className={styles["star-level"]}>5</span>
                        </div>
                        <span>
                            <img src="./assets/media/rate-bar.png" alt='' />
                        </span>
                        <span className={styles.count}>4</span>
                    </div>

                    <div className={styles["rate-count"]}>
                        <div>
                            <img src="./assets/media/Star.png" alt='' />
                            <span className={styles["star-level"]}>4</span>
                        </div>
                        <span className={styles.count}>0</span>
                    </div>

                    <div className={styles["rate-count"]}>
                        <div>
                            <img src="./assets/media/Star.png" alt='' />
                            <span className={styles["star-level"]}>3</span>
                        </div>
                        <span className={styles.count}>0</span>
                    </div>

                    <div className={styles["rate-count"]}>
                        <div>
                            <img src="./assets/media/Star.png" alt='' />
                            <span className={styles["star-level"]}>2</span>
                        </div>
                        <span className={styles.count}>0</span>
                    </div>

                    <div className={styles["rate-count"]}>
                        <div>
                            <img src="./assets/media/Star.png" alt='' />
                            <span className={styles["star-level"]}>1</span>
                        </div>
                        <span className={styles.count}>0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description