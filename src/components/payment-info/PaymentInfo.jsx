import React from 'react'
import { LeftOutlined, CloseOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
import './PaymentInfo.css'


function PaymentInfo() {
    return (
        <div className='paymentInfo'>
            <div className="paymentInfo__header">
                <h3>Thông tin thanh toán <div className="paymentInfo__header__backs"><Link to={'/card'}><p> <LeftOutlined />Trở về</p></Link></div></h3>
            </div>
            <div className="paymentInfo__content">
                <h2>Thông tin khách hàng</h2>
                <div className="paymentInfo__content__info">
                    <input type="text" className="paymentInfo__content__input" placeholder='Tên người nhận( bắt buộc)' />
                    <input type="number" className="paymentInfo__content__input" placeholder='Sô điện thoại( bắt buộc)' />
                    <input type="email" className="paymentInfo__content__input" placeholder='Email( bắt buộc)' />

                </div>
                <h2>Chọn hình thức giao hàng</h2>
                <div className="paymentInfo__content__info1">
                    <div className="paymentInfo__content__info1__radio"><input type='radio' name='check' className="paymentInfo__content__input__radio" /> Nhận tại cửa hàng</div>
                    <div className="paymentInfo__content__info1__radio"><input type='radio' name='check' className="paymentInfo__content__input__radio" />Giao tận nơi</div> 
                </div>
                <input type="text" className="paymentInfo__content__input" placeholder='Địa chỉ cụ thể( bắt buộc)' />
                <input type="text" className="paymentInfo__content__input" placeholder='Mã giảm giá( không bắt buộc)' />
            </div>
            <div className="Cart__content__list__buy1">
                            <div className="Cart__content__list__buy1__price">
                                <p>Tổng tiền tạm tính: </p>
                                <p>{(window.localStorage.getItem('totalPrice')*1).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
                            </div>
                            <div className='Cart__content__list__buy1__btns'>
                                <Link > <p className='Cart__content__list__buy1__btn1'>Đặt hàng</p></Link>
                                <Link to={'/home'}> <p className='Cart__content__list__buy1__btn2'>Chọn thêm sản phẩm khác</p></Link>
                            </div>
                        </div>
        </div>
    )
}

export default PaymentInfo