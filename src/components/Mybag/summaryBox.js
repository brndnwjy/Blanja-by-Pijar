import React from 'react'
import styles from './checkbox.module.css'

const SummaryBox = () => {
  return (
    <div className={styles.summary}>
        <p>Shopping summary</p>
        <div className={styles.total}>
            <p>Total price</p>
            <span>$ 40.0</span>
        </div>
        <a href='/'>
            <span className={styles.buy}>Buy</span>
        </a>
    </div>
  )
}

export default SummaryBox