import React from 'react'
import styles from './inventory.module.css'

const InventoryPhoto = () => {
  return (
    <div className={styles.desc}>
        <span>Photo of goods</span>
        <hr/>
        <div className={styles.photo}>
        <div className={styles.photoset}>
            <div>
                <button className={styles['first-photo']}>
                    <img src='./assets/media/box.png' alt=''/>
                </button>
                <span className={styles['first-span']}>Foto utama</span>
            </div>

            <button className={styles['rest-photo']}>
                <img src='./assets/media/box.png' alt=''/>
            </button>

            <button className={styles['rest-photo']}>
                <img src='./assets/media/box.png' alt=''/>
            </button>

            <button className={styles['rest-photo']}>
                <img src='./assets/media/box.png' alt=''/>
            </button>

            <button className={styles['rest-photo']}>
                <img src='./assets/media/box.png' alt=''/>
            </button>
        </div>
        <hr/>
        <button className={styles.upload}>
            <span>Upload foto</span>
        </button>
        </div>
    </div>
  )
}

export default InventoryPhoto