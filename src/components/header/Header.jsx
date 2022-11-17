import './Header.css'
import { Button, Modal, Form, Input, message } from 'antd';
import { Link } from "react-router-dom";
import { PhoneOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import React, { useCallback, useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {debounce} from 'debounce'

function Header() {
    window.localStorage.setItem('amountdrop', 0)
    const [amounrdrop, setAmountdrop] = useState(window.localStorage.getItem('amountdrop') * 1)
    const state = useSelector(function (state) {
        return state.amountCart
    })
    let nav = useNavigate()
    const token = window.localStorage.getItem('token')
    useEffect(function () {
        // if (token) {
        //     Axios.get('https://shope-b3.thaihm.site/api/auth/get-loged-in-user',
        //         {
        //             headers: {
        //                 Authorization: `Bearer ${token}`
        //             }
        //         }
        //     )
        //         .then(value => {
        //             console.log(value);
        //         })
        //         .catch(value => {
        //             console.log(value);
        //         })
        // }
    }, [])

    const onFinish = (values) => {
        if(values.password.length >= 5 &&  values.password.split('').filter(value=> value === ' ' ).length == 0){
            Axios.post('https://shope-b3.thaihm.site/api/auth/sign-in',
                {
                    email: values.email,
                    password: values.password,
                }
            ).then(function (value) {
                window.localStorage.setItem('token', value.data.token)
                window.localStorage.setItem('username', values.email)
    
                message.success('Đăng Nhập Thành Công')
                window.location.assign('/home')
    
            }).catch(function (value) {
                message.error('Đăng Nhập Thất Bại')
    
            })
        }else{
            alert('sai dinh dang mat khau')
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const [isModalOpen, setIsModalOpen] = useState(false);
    // const showModal = () => {
    //     setIsModalOpen(true);
    // };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [dataSearch, setDataSearch] = useState([])
    // .onclick(function(){
    //     setDataSearch([])
    // })
    useEffect(function () {
        if (dataSearch) {
            document.querySelector('.fadeheader').addEventListener("click", function () {
                document.querySelector('.fadeheader').classList.remove('showfade')
                setDataSearch([])
            });
        }
    }, [dataSearch])

    
    const debounceFun =(value)=>{
        Axios.get(`https://shope-b3.thaihm.site/api/product/find-products-by-name?productName=${value}`)
        .then(value => {
            document.querySelector('.fadeheader').classList.add('showfade')
            setDataSearch(value.data.products)
        })
        .catch(value => {
            console.log(value);
        })
    }

    const debounceDropDown = useCallback(debounce((nextValue) => debounceFun(nextValue), 500), [])

    const handleSearch = (e) => {
        //    setTimeout(() => {
            if (e.target.value !== '' && e.target.value.length >= 2) {
                debounceDropDown(e.target.value)
            }
        // }, 500);
    }


    const handleshowdrop = () => {
        let a = amounrdrop
        a++
        window.localStorage.setItem('amountdrop', a)
        setAmountdrop(a)
        if (amounrdrop % 2 !== 0) {
            document.querySelector('.Header__login__dropdown').classList.remove('showdrop')
        }
        else {
            document.querySelector('.Header__login__dropdown').classList.add('showdrop')
        }
    }
    return (
        <div className='Header'>
            <div className="fadeheader"></div>
            <div className="modal fade" id="exampleModal_1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <div className='abc'>
                                <i className="fa-solid fa-magnifying-glass name "></i>  <input type="text" placeholder='Nhập tên tỉnh thành' />
                            </div>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
                        </div>
                        <div className="modal-body">
                            <div className='address'>
                                <ul >
                                    <li><p>Hà Nội</p></li>
                                    <li>Hồ Chí Minh</li>
                                    <li>Bắc Ninh</li>
                                    <li>Cao bằng</li>
                                    <li>Phú Thọ</li>
                                    <li>Nam Định</li>
                                    <li>Hà Nam</li>
                                </ul>
                                <ul>
                                    <li><p>Hà Nội</p></li>
                                    <li>Hồ Chí Minh</li>
                                    <li>Bắc Ninh</li>
                                    <li>Cao bằng</li>
                                    <li>Phú Thọ</li>
                                    <li>Nam Định</li>
                                    <li>Hà Nam</li>
                                </ul>
                                <ul >
                                    <li><p>Hà Nội</p></li>
                                    <li>Hồ Chí Minh</li>
                                    <li>Bắc Ninh</li>
                                    <li>Cao bằng</li>
                                    <li>Phú Thọ</li>
                                    <li>Nam Định</li>
                                    <li>Hà Nam</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal_2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className='modal' title="ĐĂNG NHẬP TÀI KHOẢN SMEMBER" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

            </Modal>
            <div className='Header__nav'>
                <a href='/home' className='Header__logo'>
                    <img className='Header__img' src="https://brademar.com/wp-content/uploads/2022/10/CellphoneS-Logo-PNG-1.png" alt="" />
                </a>


                <button className='Header__address ' data-bs-toggle="modal" data-bs-target="#exampleModal_1">
                    <div className='phone__icon' >
                        <i className="fa-sharp fa-solid fa-location-dot"></i> Xem giá tại</div>
                    {/* <div className='phone__content' > Xem giá tại </div> */}
                </button>


                <p className='Header__search'>
                    <div className='search__input' >
                        <input className='input_1' type="text" onChange={handleSearch} placeholder='Bạn cần tìm gì ?' />
                        <div className="search__input__search">
                            { dataSearch.length > 0 ? dataSearch.map((value, index) => {
                                if (index < 5) {
                                    return (
                                        <div key={index}>
                                            <a href={`/productdetail/${value._id}`}>
                                                <div key={value._id} className="search__input__search__card">
                                                    <div className="search__input__search__card__img">
                                                        <img src={`https://shope-b3.thaihm.site/${value.thumbnail}`} alt="" />
                                                    </div>
                                                    <div className="search__input__search__card__info">
                                                        <h3>{value.productName}</h3>
                                                        <h4>{value.price}</h4>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                }
                            }) :  null}
                        </div>
                    </div>
                </p>


                <button className='Header__phone'>
                    <div className='phone__icon' >
                        {/* <PhoneOutlined /> Gọi để mua hàng 1800.2097 */}
                        <i class="fa-solid fa-phone"></i> Gọi để mua hàng <br /> 1800.2097
                    </div>
                </button>

                <button className='Header__address_1' data-bs-toggle="modal" data-bs-target="#exampleModal_3">
                    <div className='address__content' >  <a style={{ color: "aliceblue" }} href="https://cellphones.com.vn/dia-chi-cua-hang"><i className="fa-sharp fa-solid fa-location-dot" ></i>    Cửa hàng gần <br /> bạn nhất</a> </div>
                </button>


                <p className='Header__cart' onClick={function () {
                    nav('/card')
                }}>
                    <div class=" position-relative">
                        <div className='cart__content' ><i class="fa-solid fa-cart-shopping"></i> </div>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {state}
                            <span class="visually-hidden"></span>
                        </span>
                    </div>
                    <p className='gohang'>gio hang</p>

                </p>
                {token ? <div className='header__login__btn'>
                    <button className='Header__login' onClick={handleshowdrop}>
                        <div className='login__content' > <i class="fa-regular fa-user"></i> <p className='ten'>{window.localStorage.getItem('username')}</p></div>
                    </button>
                    <div className="Header__login__dropdown">
                        <div className="Header__login__dropdown__item"><a href="/profile/info">Trang cá nhân</a></div>
                        <div className="Header__login__dropdown__item"><a href="/profile/changePassword">Đổi mật khẩu</a></div>
                        <div className="Header__login__dropdown__item logout" ><a onClick={function () {
                            window.localStorage.removeItem('username')
                            window.localStorage.removeItem('token')
                            window.localStorage.removeItem('oderData')
                            window.location.assign('/home')
                        }}>Đăng Xuất</a></div>

                    </div>
                </div> : <button data-bs-toggle='modal' data-bs-target='#exampleModal' className='Header__login' >
                    <div className='login__content' > <i class="fa-regular fa-user"></i>  ĐĂNG NHẬP</div>
                </button>}

            </div>

            <div style={{ width: "1000px" }} className='Header_1' ></div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">ĐĂNG NHẬP TÀI KHOẢN SMEMBER</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body">
                            <div className='Login__modal'>
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item className='form__header'
                                        label=" "
                                        name="email"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder='Nhập email hoặc số điện thoại' />
                                    </Form.Item>

                                    <Form.Item className='form__header'
                                        label=" "
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password placeholder='Nhập mật khẩu' />
                                    </Form.Item>
                                    <i className='forgot-pass' href="">Quên Mật Khẩu ?</i>
                                    <div style={{ display: "flex", width: "100%", background: '#d70018', padding: '3px', borderRadius: '5px' }}>
                                        <Button style={{ width: "100%", color: "white", backgroundColor: '#d70018', border: "none", fontSize: '16px', fontFamily: 'sans-serif', padding: '20px', boxShadow: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} type="primary" htmlType="submit">Đăng nhập</Button>
                                    </div>
                                    <div className="or">
                                        <p>------------------------------------------- Hoặc -------------------------------------------- </p>
                                    </div>
                                    <div className="sign-google">
                                        <p><i class="fa-brands fa-google"></i>Đăng nhập bằng tài khoản Google</p>
                                    </div>
                                    <div className='Đangkyngay_2'>
                                        <p style={{ color: "black", right: '10px', fontSize: '16px' }} > Bạn chưa có tài khoản? <Link to={'/signup'} ><button className='DKN' data-bs-dismiss="modal">Đăng ký ngay ?</button></Link></p>
                                    </div>
                                </Form>
                            </div>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header