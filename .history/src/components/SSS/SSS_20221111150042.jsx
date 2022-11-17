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
 import './SSS.css'
 import { Col, Row } from 'antd';
function SSS() {
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
    text: 'Lap top'
  }, {
    icon1: <TabletOutlined></TabletOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'May tinh bang'
  }, {
    icon1: <SoundOutlined></SoundOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Âm Thanh'
  }, {
    icon1: <ClockCircleOutlined></ClockCircleOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Đồng hồ'
  }, {
    icon1: <HomeOutlined></HomeOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Nhà Thông Minh'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Phụ Kiện'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Phụ Kiện'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Pc-Màn Hình'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Tivi'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Hàng Cũ'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:<RightOutlined ></RightOutlined>,
    text: 'Khuyến Mại'
  }, 
  ]
  const [banner,Setbanner] = useState([
    {id:0,thumb:'https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/sliding-fold4-th11-v2.jpg', p:'GALAXY Z 2022', br:'Ưu đãi hấp dẫn'},
    {id:1,thumb:'https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/airpods-pro-2022-sliding.png', p:'AIRPODS PRO 2022', br:'Ưu đãi đến 1 triệu'},
    {id:2,thumb:'https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/xiaomi-12t-sliding.jpg', p:'XIAOMI 12T SERIES', br:'Ưu đãi mê ly'},
    {id:3,thumb:'https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/690-300-gt3.png', p:'HUAWEI WATCH GT3 SE', br:'Đặt ngay giá chất'},
    {id:4,thumb:'https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/690x300_dyson_11_11.jpg', p:'DYSON 11.11', br:'Siêu sale quà khủng'},
    {id:5,thumb:'https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/oppo-a77s-sliding.jpg', p:'OPPO A77S', br:'Ưu đãi cực sốc'},
    {id:6,thumb:'https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/tivi-toshiba-sliidng.png', p:'MỞ BÁN TV TOSHIBA', br:'Giá rẻ quà ngon'},
  ])
  const menu__2 =[
   {text1:'Iphone',text2: 'Samsung',text3: 'Samsung',} 
    
  ]
  return (
        <React.Fragment>
            <div id="nav" onMouseLeave={blurSelect}>
                    <div className="nav-menu">
                        <Row>
                           <Col span={4} className="nav-menu__title parent">
                                  {menuConfig.map(item=>{
                                    return <div className="nav-menu-list" onMouseOver={handleListSelect} >
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
                           </Col> : null}
                           <Col span={16}>
                                    {banner.map(value,index =>{
                                      <div className="banner__contact" key={val.id}>
                                          <div className="banner__contact-img">
                                            <img src={value.thumb} alt="" />
                                          </div>
                                      </div>
                                    })}
                           </Col>
                        </Row>
                    </div>
            </div>
    
        </React.Fragment>
   
  )
}

export default SSS