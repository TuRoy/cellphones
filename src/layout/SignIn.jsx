import React from 'react'
import Header from '../components/header/Header'
import { Button, Form, Input, InputNumber, message } from 'antd';
import { LeftOutlined, } from '@ant-design/icons'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
import Axios from 'axios';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

function SignIn() {

    const nav = useNavigate()

    const onFinish = (values) => {

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
    };
    return (
        <div>  


            <div className='signup'>

                <div className='img__up'>
                    <img style={{ width: "300px" }} src="https://cellphones.com.vn/smember/_nuxt/img/Shipper_CPS3.0251fdd.png" alt="" />
                </div>
                <h1 class="login-form__title">BẮT ĐẦU MUA HÀNG VỚI CELLPHONES</h1>




                <Form className='tung123' {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item

                        name='email'
                        label=""
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
                        <Input placeholder="Vui lòng nhập email..." />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        label=""
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Mật khẩu của bạn là..." />
                    </Form.Item>



                    <Form.Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            ĐĂNG NHẬP
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>


    )
}

export default SignIn