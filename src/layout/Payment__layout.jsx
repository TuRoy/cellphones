import Header from '../components/header/Header'
import React from 'react'
import PaymentInfo from '../components/payment-info/PaymentInfo'

function Payment__layout() {
  return (
    <div>
        <Header></Header>
       <div className="components__paymentinfo"> <PaymentInfo></PaymentInfo></div>
    </div>
  )
}

export default Payment__layout