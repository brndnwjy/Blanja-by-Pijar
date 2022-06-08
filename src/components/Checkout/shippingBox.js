import React from 'react'
import styles from './checkout.module.css'

const ShippingBox = () => {
  return (
    <div className={styles['ship-address']}>
        <p className={styles.name}>Andreas Jane</p>
        <p className={styles.address}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                        [Blanja Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
        <button type='submit'>
            <span>Choose another address</span>
        </button>
    </div>
  )
}

export default ShippingBox