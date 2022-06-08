import React from 'react'
import Inventory from '../components/Insert/inventory'
import InventoryDesc from '../components/Insert/inventoryDesc'
import InventoryDetail from '../components/Insert/inventoryDetail'
import InventoryPhoto from '../components/Insert/inventoryPhoto'
import UploadBtn from '../components/Insert/uploadBtn'
import styles from './section.module.css'

const SellingSection = () => {
  return (
    <div className='container'>
        <div className={styles.sellingSection}>
            <Inventory />
            <InventoryDetail />
            <InventoryPhoto />
            <InventoryDesc />
            <UploadBtn />
        </div>
    </div>
  )
}

export default SellingSection