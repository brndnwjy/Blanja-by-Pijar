import React from 'react'
import styles from './checkout.module.css'

const ItemBox = () => {
  return (
    <div className={styles.item}>
        <div className={styles.selectItem}>
            <div className={styles.check}>
                <img src='./assets/media/product.png' className={styles['item-img']} alt='' />
                <div className={styles.desc}>
                    <p className={styles['item-name']}>Men's Formal Suit - Black</p>
                    <p className={styles['item-seller']}>Zalora cloth</p>
                </div>
            </div>

            <div className={styles.price}>
                <span>$ 20.0</span>
            </div>
        </div>
    </div>
  )
}

export default ItemBox