import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './card.module.css'

// import bg from '../../assets/mitchell-luo-9Ij2npk662U-unsplash.jpg'

const CategoryCard2 = () => {
    const [category, setCategory] = useState([])
    // const navigate = useNavigate()

    async function fetchData(){
        try {
            const result = await axios({
                method: 'GET',
                baseURL: 'http://localhost:4000/v1',
                url: '/category'
            })
            setCategory(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <section className={styles.section}>
            <div  className='container'>
                <div className={styles.title}>
                    <h2>Category</h2>
                    <h4>What are you currently looking for?</h4>
                </div>
                <div className={styles.content}>
                    {category.map((item)=> (
                        <div className={styles.wrapper}>
                            <div className='card' style={{width: '200px', height: '200px'}}>
                                <div className={styles.centering}>
                                    <Link to='/' className={styles.link}>
                                        <div className={styles['card-body']}>
                                            <h5 className='card-title'>{item.category_name}</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    //   <div className={styles.wrapper}>
    //     <div className='card' style={{width: '200px', height: '300px'}}>
    //       <Link to='/productlist' className={styles.link}>
    //         <div className={styles['card-body']}>
    //           <h5 className='card-title'>Men's formal suit - Black & White</h5>
    //           <p className='card-text'>$ 40.0</p>
    //           <p className='card-text'>Zalora Cloth</p>
    //           <img src={rating} alt='rating' />
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    )
  }

export default CategoryCard2