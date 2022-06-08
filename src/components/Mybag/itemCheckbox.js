import React from 'react'
import styles from './checkbox.module.css'

const ItemCheckbox = () => {
  return (
    <div className={styles.item}>
        <div className={styles.selectItem}>
            <div className={styles.check}>
                <input type="checkbox" checked />
                <img src="./assets/media/product.png" className={styles['item-img']} alt='' />
                <div className={styles.desc}>
                    <p className={styles['item-name']}>Men's Formal Suit - Black</p>
                    <p className={styles['item-seller']}>Zalora cloth</p>
                </div>
            </div>

            <div className={styles.amount}>
                <button type="submit" className={styles.decrease}>
                    <img src="./assets/media/decrease.png" alt='' />
                </button>
                <span>1</span>
                <button type="submit" className={styles.increase}>
                    <img src="./assets/media/increase.png" alt='' />
                </button>
            </div>

            <div className={styles.price}>
                <span>$ 20.0</span>
            </div>
        </div>
    </div>
  )
}

export default ItemCheckbox