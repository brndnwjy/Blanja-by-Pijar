import React from 'react'
import styles from './inventory.module.css'

const InventoryDetail = () => {
  return (
    <div className={styles.desc}>
        <span>Item details</span>
        <hr/>
        <p>Unit price</p>
        <input type='text'/>
        <p>Stock</p>
        <input type='text'/>
        <p>Stock</p>
        <div className={styles.condition}>
            <input type='radio' className={styles.new}/>
            <span className={styles['new-span']}>Baru</span>
            <input type='radio' className={styles.old}/>
            <span className={styles['old-span']}>Lama</span>
        </div>
    </div>
  )
}

export default InventoryDetail