import React from 'react'
import styles from './profile.module.css'

const ProfileBox = () => {
  return (
    <div className={styles.desc}>
        <span>My profile</span>
        <p>Manage your profile information</p>
        <img src='./assets/media/line.png' className={styles['h-line']} alt='' />
        <div className={styles['input-group']}>
            <div className={styles['main-input']}>
                
                <div className={styles['field']}>
                    <p className={styles['field-name']}>Name</p>
                    <p className={styles['field-name']}>Email</p>
                    <p className={styles['field-name']}>Phone number</p>
                    <p className={styles['field-name']}>Gender</p>
                    <p className={styles['field-name']}>Date of birth</p>
                </div>

                <div className={styles.input}>
                    <input type='text' placeholder='Johanes Mikael' className={styles['input-area']} />
                    <input type='text' placeholder='johanes@gmail.com' className={styles['input-area']} />
                    <input type='text' placeholder='08901289012' className={styles['input-area']} />
                    <div className={styles['check-area']}>
                        <input type='radio' id='laki' /> <label for='laki'>Laki-laki</label>
                        <input type='radio' id='perempuan' /> <label for='perempuan'>Perempuan</label>
                    </div>
                    <input type='date' className={styles['input-area']} />
                </div>
            </div>

            <img src='./assets/media/v-line.png' className={styles['v-line']} alt='' />

            <div className={styles['side-input']}>
                <img src='./assets/navbar/user.png' alt='' />
                <button>Select image</button>
            </div>
        </div>
        <button className={styles.save}>
            <span>Save</span>
        </button>
    </div>
  )
}

export default ProfileBox