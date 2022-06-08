import React from 'react'
import Navbar from '../../components/Navbar'
import ProfileBox from '../../components/Profile/profileBox'

const CustProfile = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <ProfileBox />
      </div>
    </div>
  )
}

export default CustProfile