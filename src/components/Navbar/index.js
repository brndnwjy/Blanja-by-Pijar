import React from 'react'
import { NavLink } from 'react-router-dom'
import Input from '../Input'
import styles from './navbar.module.css'

import logo from '../../assets/logo.jpg'
import cart from '../../assets/cart.png'
import bell from '../../assets/bell.png'
import mail from '../../assets/mail.png'
import user from '../../assets/user.png'

const Navbar = () => {
//   const [search, setSearch] = useState('')
//   const [searchParams, setSearchParams] = useSearchParams()

//   const handleSearch = () => {
//       setSearchParams({keyword: {search}})
//   }

  return (
    <nav className={styles.navbar}>
        <div class='container'>
            <div className={styles.wrapper}>
                <NavLink to='/'>
                    <img src={logo} alt='logo' width={90} />
                </NavLink>

                <div className={styles.searchnav}>
                    <Input
                        type='text'  
                        id='navbar'  
                        placeholder='Search here..' 
                        name='navbar'
                        // onChange= {
                        //     (e)=>setSearch(e.target.value)
                        // }
                    />
                    <button>Search</button>
                </div>

                <div className={styles['user-sect']}>
                    <NavLink to='/mybag'>
                        <img src={cart} alt='logo' width={90} />
                    </NavLink>
                    <NavLink to='/'>
                         <img src={bell} alt='logo' width={90} />
                    </NavLink>
                    <NavLink to='/'>
                         <img src={mail} alt='logo' width={90} />
                    </NavLink>
                    <NavLink to='/profile'>
                         <img src={user} alt='logo' width={90} />
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar