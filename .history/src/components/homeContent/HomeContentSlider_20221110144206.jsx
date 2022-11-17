import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import './HomeContent.css'



function HomeContentSlider() {
    let token = window.localStorage.getItem('token')
    const [dataProduct, setDataProduct] = useState([])
    useEffect(() => {
        axios.get('https://shope-b3.thaihm.site/api/product/get-all-products', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(value => {
            setDataProduct(value.data.products)
        })
            .catch(value => {
                console.log(value);
            })
    }, [])


    const handleChangeCart = (e) => {
        const widthItem = document.querySelector('.home__content__list__cart').offsetWidth + 12;
        console.log(e.target);
        if (e.target.id == 'pev') {
            document.querySelector('.home__content__list').scrollLeft -= widthItem
        } else {
            document.querySelector('.home__content__list').scrollLeft += widthItem
        }
    }

    let count  = 0
    let check  = 0
    window.localStorage.setItem('length', dataProduct.length)
    var A 
    useEffect(function(){
         A = setInterval(function(){
            count = document.querySelector('.home__content__list__cart').offsetWidth + 12
            if(check < (240 * (window.localStorage.getItem('length') - 5 ))){
                check += document.querySelector('.home__content__list__cart').offsetWidth + 12
                document.querySelector('.home__content__list').scrollLeft += count
            } else{
                clearInterval(A)
            }
        },3000)
        return ()=>{
            clearInterval(A)
        }
    },[])
  return (
    <div>
         <div className='home__content'>
                <div className='home__content__list' >
                    <div className="home__content__list__top">
                        {dataProduct.map(value => {
                            let img = `https://shope-b3.thaihm.site/${value.thumbnail}`
                            return (
                                <div key={value._id} className="home__content__list__cart">
                                    <div className="home__content__list__cart__img"><img src={img} alt="" /></div>
                                    <h3>{value.productName}</h3>
                                    <p className='home__content__list__cart__price'>{(value.price * 1).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                    <div className="home__content__list__cart__sale">
                                        Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và
                                    </div>
                                    <div className='home__content__list__cart__star'> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                    <div className='home__content__list__cart__Fav'><p>Yêu thích </p><i className="fa-regular fa-heart"></i></div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="home__content__list__bottom">
                        {dataProduct.reverse().map(value => {
                            let img = `https://shope-b3.thaihm.site/${value.thumbnail}`
                            return (
                                <div key={value._id} className="home__content__list__cart">
                                    <div className="home__content__list__cart__img"><img src={img} alt="" /></div>
                                    <h3>{value.productName}</h3>
                                    <p className='home__content__list__cart__price'>{(value.price * 1).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                    <div className="home__content__list__cart__sale">
                                        Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và
                                    </div>
                                    <div className='home__content__list__cart__star'> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                    <div className='home__content__list__cart__Fav'><p>Yêu thích </p><i className="fa-regular fa-heart"></i></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button className="home__content__list__button __content__list__button__left" onClick={handleChangeCart}><i id='pev' className="fa-solid fa-chevron-left"></i></button>
                <button className="home__content__list__button __content__list__button__right" onClick={handleChangeCart}><i id='next' className="fa-solid fa-chevron-right"></i></button>


            </div>
    </div>
  )
}

export default HomeContentSlider