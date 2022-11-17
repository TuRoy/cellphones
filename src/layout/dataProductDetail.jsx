import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ProductDetail from '../components/ProductDetail/ProductDetail'


function dataProductDetail() {
  return (
    <div>
        <div><Header/></div>
        <div className='component__productdetail'><ProductDetail/></div>
        <div><Footer/></div>
    </div>
  )
}

export default dataProductDetail