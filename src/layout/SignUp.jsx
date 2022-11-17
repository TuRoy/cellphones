import React from 'react'
import Header from '../components/header/Header'
import { Button, Form, Input, InputNumber,  message} from 'antd';
import { LeftOutlined, } from '@ant-design/icons'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
import  Axios  from 'axios';




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


function SignUp() {
    const nav = useNavigate()

    const onFinish = (values) => {
        if(values.password.length >= 5 &&  values.password.split('').filter(value=> value == ' ' ).length == 0){
            Axios.post('https://shope-b3.thaihm.site/api/auth/sign-up',
            {
                email: values.email,
                password: values.password,
            }
            ).then(function (value) {
                window.localStorage.setItem('token', value.data.token)
                window.localStorage.setItem('username', values.email)
                message.success('Đăng Ký Thành Công')
                window.location.assign('/signin')
            })
            .catch(value=>{
                message.error('dang cho server...')
            })
        }else{
            message.error('sai dinh dang mat khau')
        }
    };



    return (
        <div>  <Header></Header>


            <div className='signup'>

                <div className='img__up'>
                    <img style={{ width: "300px" }} src="https://cellphones.com.vn/smember/_nuxt/img/Shipper_CPS3.0251fdd.png" alt="" />
                </div>
                <div class="login-form__title">Đăng Ký Tài Khoản</div>




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
                            ĐĂNG KÝ
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>


    )
}

export default SignUp