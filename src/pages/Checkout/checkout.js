import React from 'react'
import ItemBox from '../../components/Checkout/itemBox'
import ShippingBox from '../../components/Checkout/shippingBox'
import Summary from '../../components/Checkout/summary'
import Navbar from '../../components/Navbar'

const Checkout = () => {
  return (
    <div>
        <Navbar />
        <div className='container'>
            <h1 style={{margin: '-30px 0 20px 20px'}}>Checkout</h1>
            <div style={{display: 'flex'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h6 style={{marginLeft: '20px'}}>Shipping Address</h6>
                    <ShippingBox />
                    <ItemBox />
                </div>
                <Summary />
            </div>
        </div>
    </div>
  )
}

export default Checkout