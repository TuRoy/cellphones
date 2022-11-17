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
    '<span>iphone</span> <span>Samsung</span> <span>Iphone</span> <span>Xiaomi</span><span>OPPO</span><span>Nokia</span><span>Asus</span><span>OnePlus</span><span>Nobuta</span><span>Điện Thoại Phổ Thông</span>',
    loaidienthoai: ' <span>Android</span> <span>Iphone</span> <span> Điện Thoại Phổ thông</span> ',
    chontheonhucau : ' <span> Hỗ trợ 5G</span> <span> Điện Thoại Gamming</span> <span> Pin trâu</span>  ',
    dienthoaihot: '<span>  Iphone 14</span> <span>  Galaxy Z Fold4</span> <span>  Ipone 13</span> <span>  vivo Y35</span> ',
    
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
                                  {menu2.map(function(val,index){
                                      return (
                                        <React.Fragment>
                                          <Col span={6}>
                                        <div id="menu2">
                                           <div className="menu2-title">
                                           <p>
                                             Chọn Theo Hãng
                                            </p>
                                           </div>
                                            <div className="menu2-contact">
                                                    <p>{}
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
                                        </React.Fragment>
                                      )
                                  })}
                                    
                                </Row>
                           </Col> : null}
                        </Row>
                    </div>
            </div>
    
        </React.Fragment>
   
  )
}

export default Banner