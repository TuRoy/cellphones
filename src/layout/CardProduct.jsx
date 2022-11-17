import React from 'react'
import Header from '../components/header/Header'
import Card from '../components/card/Card'

function CardProduct() {
  return (
    <div>
        <div className='components__Header'><Header></Header></div>
        <div className="components__card" style={{padding: '100px 0px'}}><Card></Card></div>
    </div>
  )
}

export default CardProduct