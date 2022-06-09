import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../configs/axios'
import styles from './detail.module.css'

const Detail = () => {
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
    <div className={styles.detail}>
        <p className={styles.name}>{product.product_name}</p>
        <p className={styles.seller}>Zalora Cloth</p>
        <img src="./assets/media/rating.png" alt=''/>

        <p className={styles["price-tag"]}>Price</p>
        <span className={styles.price}>Rp {product.price}</span>

        <div className={styles["modifier-tag"]}>
            <div className={styles["size-tag"]}>
                <span className={styles.size}>Size</span>
                <div className={styles.modifier}>
                    <button type="submit" className={styles.decrease}>
                        <img src="./assets/media/decrease.png" alt=''/>
                    </button>
                    <span>28</span>
                    <button type="submit" className={styles.increase}>
                        <img src="./assets/media/increase.png" alt=''/>
                    </button>
                </div>
            </div>

            <div className={styles["amount-tag"]}>
                <span className={styles.amount}>Jumlah</span>
                <div className={styles.modifier}>
                    <button type="submit" className={styles.decrease}>
                        <img src="./assets/media/decrease.png" alt=''/>
                    </button>
                    <span>1</span>
                    <button type="submit" className={styles.increase}>
                        <img src="./assets/media/increase.png" alt=''/>
                    </button>
                </div>
            </div>
        </div>

        <div className={styles["button-group"]}>
            <button className={styles["button-1"]}>
                Chat
            </button>

            <button className={styles["button-2"]}>
                Add Bag
            </button>

            <button className={styles["button-3"]}>                
                Buy Now
            </button>
        </div>
    </div>
  )
}

export default Detail