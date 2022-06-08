import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import CategoryCard2 from '../../components/CategoryCard2'
import ProductCard2 from '../../components/ProductCard2';
import CustLogin from '../../pages/Auth/Customer/login';
import SellerLogin from '../../pages/Auth/Seller/login';
import CustRegister from '../../pages/Auth/Customer/register';
import SellRegister from '../../pages/Auth/Seller/register';
import Home from '../../pages/Home/home';
import MyBag from '../../pages/Mybag/mybag';
// import ProductList from './pages/productList';
import ProductSelling from '../../pages/ProductSelling/productSelling';
import CustProfile from '../../pages/Profile/custProfile';
import Checkout from '../../pages/Checkout/checkout';
import ProductDetail from '../../pages/Detail/productDetail';
import RequiredAuth from '../../components/requiredAuth';

import Register from '../../components/Auth/custRegister'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/productlist' element={<ProductList/>} /> */}
      <Route path='/' element={<Navigate to='/home' replace='true'/>} />
      <Route path='/home' element={<RequiredAuth> <Home/> </RequiredAuth>} />

      <Route path='/register' element={<Register/>} />
      <Route path='/customerLogin' element={<CustLogin/>} />
      <Route path='/sellerLogin' element={<SellerLogin/>} />
      <Route path='/customerRegister' element={<CustRegister/>} />
      <Route path='/sellerRegister' element={<SellRegister/>} />

      <Route path='/profile' element={<RequiredAuth> <CustProfile /> </RequiredAuth>} />
      <Route path='/mybag' element={<RequiredAuth> <MyBag /> </RequiredAuth>} />
      <Route path='/checkout' element={<RequiredAuth> <Checkout /> </RequiredAuth>} />
      <Route path='/productSelling' element={<RequiredAuth> <ProductSelling /> </RequiredAuth>} />

      <Route path='/category' element={<CategoryCard2/>} />
      <Route path='/product' element={<ProductCard2/>} />
      <Route path='/productDetail' element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router