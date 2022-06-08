import React from 'react'
import styles from './detail.module.css'

const Description = () => {
  return (
    <div className={styles["product-info"]}>
        <p className={styles.title}>Informasi Produk</p>

        <div className={styles.wrapper}>
            <p className={styles.subtitle}>Condition</p>
            <span className={styles.condition}>New</span>
        </div>

        <div className={styles.wrapper}>
            <p className={styles.subtitle}>Description</p>
            <div className={styles.desc}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                    Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor.
                    Fusce
                    nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed
                    enim
                    vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a
                    consequat mauris, vel suscipit ipsum.
                    Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare
                    suscipit magna.
                </p>
            </div>
        </div>

        <div>
            <p className={styles.title}>Product Review</p>
            <div className={styles["review-tag"]}>
                <div className={styles.review}>
                    <div className={styles["review-score"]}>
                        <p>5.0</p>
                        <span>/10</span>
                    </div>
                    <span>
                        <img src="./assets/media/rating.png" alt='' />
                    </span>
                </div>

                <div>
                    <div className={styles["rate-count"]}>
                        <div>
                            <img src="./assets/media/Star.png" alt='' />
                            <span className={styles["star-level"]}>5</span>
                        </div>
                        <span>
                            <img src="./assets/media/rate-bar.png" alt='' />
                        </span>
                        <span className={styles.count}>4</span>
                    </div>

                    <div className={styles["rate-count"]}>
                        <div>
                            <img src="./assets/media/Star.png" alt='' />
                            <span className={styles["star-level"]}>4</span>
                        </div>
                        <span className={styles.count}>0</span>
                    </div>

                    <div className={styles["rate-count"]}>
                        <div>
                            <img src="./assets/media/Star.png" alt='' />
                            <span className={styles["star-level"]}>3</span>
                        </div>
                        <span className={styles.count}>0</span>
                    </div>

                    <div className={styles["rate-count"]}>
                        <div>
                            <img src="./assets/media/Star.png" alt='' />
                            <span className={styles["star-level"]}>2</span>
                        </div>
                        <span className={styles.count}>0</span>
                    </div>

                    <div className={styles["rate-count"]}>
                        <div>
                            <img src="./assets/media/Star.png" alt='' />
                            <span className={styles["star-level"]}>1</span>
                        </div>
                        <span className={styles.count}>0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description