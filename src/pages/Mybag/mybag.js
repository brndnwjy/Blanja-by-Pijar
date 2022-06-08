import React from 'react'
import Navbar from '../../components/Navbar'
import SelectCheckbox from '../../components/Mybag/selectCheckbox'
import ItemCheckbox from '../../components/Mybag/itemCheckbox'
import SummaryBox from '../../components/Mybag/summaryBox'

const MyBag = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
      <h1 style={{margin: '-30px 0 0 20px'}}>My Bag</h1>
      <div style={{display: 'flex'}}>
          <div style={{width:'60%'}}>
            <SelectCheckbox />
            <ItemCheckbox />
          </div>
          <SummaryBox />
        </div>
      </div>
    </div>
  )
}

export default MyBag