import React from 'react'
import styles from './inventory.module.css'

const Inventory = () => {
  return (
    <div className={styles.desc}>
        <span>Inventory</span>
        <hr/>
        <p>Name of goods</p>
        <input type="text"/>
    </div>
  )
}

export default Inventory