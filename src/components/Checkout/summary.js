import React from 'react'
import styles from './checkout.module.css'

const Summary = () => {
  return (
    <div className={styles.payment}>
        <p>Shopping summary</p>
        <div className={styles.order}>
            <p>Order</p>
            <span>$ 40.0</span>
        </div>
        <div className={styles.order}>
            <p>Delivery</p>
            <span>$ 5.0</span>
        </div>
        <img src="./assets/media/hr.png" className={styles.hr} alt=''/>
        <div className={styles.total}>
            <p>Total</p>
            <span>$ 45.0</span>
        </div>
        <button type="submit">Select Payment</button>
    </div>
  )
}

export default Summary