import React from 'react'
import styles from './checkbox.module.css'

const SelectCheckbox = () => {
  return (
    <div>
        <div class={styles.selectAll}>
            <div class={styles.check}>
                <input type="checkbox" checked/>
                    Select all items
            </div>
            <a href="/" className={styles.delete}>
                <span>Delete</span>
            </a>
        </div>
    </div>
  )
}

export default SelectCheckbox