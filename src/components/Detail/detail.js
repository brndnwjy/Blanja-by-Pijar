import React from 'react'
import styles from './detail.module.css'

const Detail = () => {
  return (
    <div className={styles.detail}>
        <p className={styles.name}>Baju Muslim Pria</p>
        <p className={styles.seller}>Zalora Cloth</p>
        <img src="./assets/media/rating.png" alt=''/>

        <p className={styles["price-tag"]}>Price</p>
        <span className={styles.price}>$ 20.0</span>

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