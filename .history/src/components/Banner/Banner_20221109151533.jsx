import React, { useState } from 'react'

import {
    MobileOutlined ,
    RightOutlined ,
    LaptopOutlined ,
    TabletOutlined ,
    SoundOutlined ,
    ClockCircleOutlined ,
    HomeOutlined 
  } from '@ant-design/icons';
 import './banner.css'
 import { Col, Row } from 'antd';
function Banner() {
  const [isShowMegaMenu, setShowMegaMenu] = useState(false)
  function handleListSelect(data){
    setShowMegaMenu(true)
  }

  function blurSelect(){
    setShowMegaMenu(false)
  }

  const menuConfig = [{
    icon1: <MobileOutlined></MobileOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Dien thoai'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Lap Top'
  }, {
    icon1: <TabletOutlined></TabletOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <SoundOutlined></SoundOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Âm thanh'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Nhà Thông Minh'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Phụ Kiện'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Màn Hình'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'TiVi'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Thu Cũ'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Hàng Cũ'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Khuyến Mãi'
  }]
      
const menu2= [
  {
    Chontheohang:
    '<span>iphone</span> <span>Samsung</span> <span>Iphone</span> <span>Xiaomi</span><span>OPPO</span><span>Nokia</span><span>Asus</span><span>OnePlus</span><span>Nobuta</span><span>Điện Thoại Phổ Thông</span>'
  }
]

  return (
        <React.Fragment>
            <div id="nav">
                    <div className="nav-menu">
                        <Row>
                           <Col span={4} className="nav-menu__title parent">
                                  {menuConfig.map(item=>{
                                    return <div className="nav-menu-list" onMouseOver={handleListSelect} onMouseLeave={blurSelect}>
                                    <p><span className='nav-menu__title-icon menu'>{item.icon1}</span>{item.text}</p>
                                    <span className='nav-mennu__icon'>{item.icon2}</span>
                                    </div>
                                  })}
                                    
                                    
                           </Col>
                            {isShowMegaMenu ? <Col span={20} className='nav__menu child'>
                                <Row>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                             Chọn Theo Hãng
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p><span>iphone</span> <span>Samsung</span> 
                                                       <span>Iphone</span> 
                                                       <span>Xiaomi</span>
                                                       <span>OPPO</span>
                                                       <span>Nokia</span>
                                                       <span>Asus</span>
                                                       <span>OnePlus</span>
                                                       <span>Nobuta</span>
                                                       <span>Điện Thoại Phổ Thông</span>
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           Loại điện thoại
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p>
                                                    <span>Android</span> 
                                                    <span>Iphone</span> 
                                                    <span> Điện Thoại Phổ thông</span> 
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           Chọn theo nhu cầu
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                         <p>
                                                         <span> Hỗ trợ 5G</span> 
                                                         <span> Điện Thoại Gamming</span> 
                                                         <span> Pin trâu</span> 
                                                        </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           Điện thoại hót
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p>
                                                    <span>  Iphone 14</span> 
                                                    <span>  Galaxy Z Fold4</span> 
                                                    <span>  Ipone 13</span> 
                                                    <span>  vivo Y35</span> 
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                           </Col> : null}
                           {/* <Col span={20} className='nav__menu'>
                                <Row>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                             Chọn Theo Hãng
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p><span>iphone</span> 
                                                       <span>Samsung</span> 
                                                       <span>Iphone</span> 
                                                       <span>Xiaomi</span>
                                                       <span>OPPO</span>
                                                       <span>Nokia</span>
                                                       <span>Asus</span>
                                                       <span>OnePlus</span>
                                                       <span>Nobuta</span>
                                                       <span>Điện Thoại Phổ Thông</span>
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           Loại điện thoại
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p>
                                                    <span>Android</span> 
                                                    <span>Iphone</span> 
                                                    <span> Điện Thoại Phổ thông</span> 
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           Chọn theo nhu cầu
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                         <p>
                                                         <span> Hỗ trợ 5G</span> 
                                                         <span> Điện Thoại Gamming</span> 
                                                         <span> Pin trâu</span> 
                                                        </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                           Điện thoại hót
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p>
                                                    <span>  Iphone 14</span> 
                                                    <span>  Galaxy Z Fold4</span> 
                                                    <span>  Ipone 13</span> 
                                                    <span>  vivo Y35</span> 
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                           </Col> */} 
  {/* <Col span={14} className='box-s'>
    <Carousel>
      <Carousel.Item interval={1000} >
        <img
          className="d-block w-100"
          src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/xiaomi-12t-sliding.jpg"
          alt=""
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/xiaomi-12t-sliding.jpg"
          alt=""
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/690-300-gt3.png"
          alt=""
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/sliding-fold4-th11-v2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Col> */}
                        </Row>
                    </div>
            </div>
    
        </React.Fragment>
   
  )
}

export default Banner