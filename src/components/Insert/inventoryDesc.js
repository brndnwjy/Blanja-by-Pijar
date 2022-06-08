import React from 'react'
import styles from './inventory.module.css'

const InventoryDesc = () => {
  return (
    <div class={styles.desc}>
        <span>Description</span>
        <hr/>
        <textarea cols='30' rows='10' class={styles['desc-box']}/>
    </div>
  )
}

export default InventoryDesc