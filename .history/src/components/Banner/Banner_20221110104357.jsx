import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

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
  const [indexHover, setIndexHover] = useState(-1)

  const handleHover = (e)=>{
    console.log(85,e.target);
      setIndexHover(e.target.id)
  }
  const handleLeave = ()=>{
    setIndexHover(-1)
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
     'iphone Samsung Iphone Xiaomi OPPO Nokia Asus OnePlus Nobuta Điện Thoại Phổ Thông ',
    loaidienthoai: ' Android Iphone  Điện Thoại Phổ thông  ',
    chontheonhucau : '  Hỗ trợ 5G  Điện Thoại Gamming  Pin trâu   ',
    dienthoaihot:   ' Iphone 14   Galaxy Z Fold4   Ipone 13   vivo Y35 ',
    
    
  },
  {
    Chontheohang:
     'iphone Samsung Iphone Xiaomi OPPO Nokia Asus OnePlus Nobuta Điện Thoại Phổ Thông ',
    loaidienthoai: ' Android Iphone  Điện Thoại Phổ thông  ',
    chontheonhucau : '  Hỗ trợ 5G  Điện Thoại Gamming  Pin trâu   ',
    dienthoaihot:   ' Iphone 14   Galaxy Z Fold4   Ipone 13   vivo Y35 ',
    
    
  }, {
    Chontheohang:
     'iphone Samsung Iphone Xiaomi OPPO Nokia Asus OnePlus Nobuta Điện Thoại Phổ Thông ',
    loaidienthoai: ' Android Iphone  Điện Thoại Phổ thông  ',
    chontheonhucau : '  Hỗ trợ 5G  Điện Thoại Gamming  Pin trâu   ',
    dienthoaihot:   ' Iphone 14   Galaxy Z Fold4   Ipone 13   vivo Y35 ',
    
    
  }, {
    Chontheohang:
     'iphone Samsung Iphone Xiaomi OPPO Nokia Asus OnePlus Nobuta Điện Thoại Phổ Thông ',
    loaidienthoai: ' Android Iphone  Điện Thoại Phổ thông  ',
    chontheonhucau : '  Hỗ trợ 5G  Điện Thoại Gamming  Pin trâu   ',
    dienthoaihot:   ' Iphone 14   Galaxy Z Fold4   Ipone 13   vivo Y35 ',
    
    
  }, {
    Chontheohang:
     'iphone Samsung Iphone Xiaomi OPPO Nokia Asus OnePlus Nobuta Điện Thoại Phổ Thông ',
    loaidienthoai: ' Android Iphone  Điện Thoại Phổ thông  ',
    chontheonhucau : '  Hỗ trợ 5G  Điện Thoại Gamming  Pin trâu   ',
    dienthoaihot:   ' Iphone 14   Galaxy Z Fold4   Ipone 13   vivo Y35 ',
    
    
  },
  
]
  return (


        <React.Fragment>
            <div id="nav">
                    <div className="nav-menu">
                        <Row>
                           <Col span={4} className="nav-menu__title parent">
                                  {menuConfig.map((item, index)=>{
                                    return <div className="nav-menu-list" id={index} onMouseOver={handleListSelect} onMouseLeave={blurSelect}>
                                    <p><span className='nav-menu__title-icon menu'>{item.icon1}</span>{item.text}</p>
                                    <span className='nav-mennu__icon'>{item.icon2}</span>
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
                                                    <p>{val.Chontheohang}
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
                                                    {val.loaidienthoai}
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
                                                         {val.chontheonhucau}
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
                                                   {val.dienthoaihot}
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                        </React.Fragment>
                                      )
                                  })}
                                    
                                </Row>
                           </Col> : null}
                                    </div>
                                  })}
                                    
                                    
                           </Col>
                           
                        </Row>
                    </div>
            </div>
    
        </React.Fragment>
   
  )
}

export default Banner