import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeloading } from '../../redux-toolkit/loading'
import './HomeContent.css'
import HomeContentSlider from './HomeContentSlider'

function HomeContent() {

    
    let token = window.localStorage.getItem('token')
    const [showmore, setShowmore] = useState(10)
    const dispatch  =useDispatch()
    const [dataProduct, setDataProduct] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('https://shope-b3.thaihm.site/api/category/get-all-categories', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(value => {
            console.log(123123);
            setCategories(value.data.categories)
        }).catch(err => {
            console.log(err);
        })



        axios.get('https://shope-b3.thaihm.site/api/product/get-all-products', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(value => {
            dispatch(removeloading(false))
            setDataProduct(value.data.products)
        })
            .catch(value => {
                console.log(value);
            })
    }, [])
    const handleShowMore = () => {
        setShowmore(count => count + 10)
    }
    return (
            <div className="home__content__block">
            <HomeContentSlider></HomeContentSlider>
            <div className="home__content__list2">
            <div className="home__content__list2__category">
                    {categories.map(value => {
                        return (
                            <div className="home__content__list2__category__item">
                                <p>{value.categoryName}</p>
                                <img src={`https://shope-b3.thaihm.site/${value.thumbnail}`} alt="" />
                            </div>
                        )
                    })}

                </div>
                <div className="home__content__list2__btnall">
                    <Link to={'/allproduct'}><button> <i class="fa-solid fa-flask-vial"></i> L???c s???n ph???m</button></Link>
                    <Link to={'/allproduct'}><button>Xem t???t c???</button></Link></div>

                

                <div className="home__content__list2__cart ">
                    {dataProduct.filter((value, index) => index < showmore).map(value => {
                        let img = `https://shope-b3.thaihm.site/${value.thumbnail}`
                        return (
                            <a href={`/ProductDetail/${value._id}`}>
                                <div key={value._id} className="home__content__list__cart test2">
                                    <div className="home__content__list__cart__img"><img src={img} alt="" /></div>
                                    <h3>{value.productName}</h3>
                                    <p className='home__content__list__cart__price'>{(value.price * 1).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                    <div className="home__content__list__cart__sale">
                                        Nh???p m?? CPSONL500 khi thanh to??n VNPAY qua website ho???c CPS500 qua QR Offline t???i c???a h??ng ????? gi???m th??m 500k khi mua s???n ph???m Apple t??? 17 tri???u v??
                                    </div>
                                    <div className='home__content__list__cart__star'> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                    <div className='home__content__list__cart__Fav'><p>Y??u th??ch </p><i className="fa-regular fa-heart"></i></div>
                                </div>
                            </a>
                        )
                    })}
                </div>
                <div className='home__content__list2__morebtns'><button onClick={handleShowMore} className='home__content__list2__morebtn'>Xem Th??m</button></div>
            </div>
        </div>
    )
}

export default HomeContent