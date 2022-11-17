import React, { useState, useRef } from 'react'
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
  const iD = useRef()
  const [indexHover, setIndexHover] = useState(-1)

  const handleHover = (e)=>{
    console.log(85,e.target);
    console.log(85,e.target.id);

      setIndexHover(e.target.id * 1)
  }
  const handleLeave = ()=>{
    setIndexHover(-1)
  }

  const menuConfig = [{
    icon1: <MobileOutlined></MobileOutlined>,
    icon2:,
    text: 'Dien thoai'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:,
    text: 'Lap Top'
  }, {
    icon1: <TabletOutlined></TabletOutlined>,
    icon2:,
    text: 'May tinh bang'
  }, {
    icon1: <SoundOutlined></SoundOutlined>,
    icon2:,
    text: 'Âm thanh'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:,
    text: 'Nhà Thông Minh'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:,
    text: 'Phụ Kiện'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:,
    text: 'Màn Hình'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:,
    text: 'TiVi'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:,
    text: 'Thu Cũ'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:,
    text: 'May tinh bang'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,<i class="fa-solid fa-chevron-right"></i>
    icon2:,
    text: 'Hàng Cũ'
  }, {
    icon1: <LaptopOutlined></LaptopOutlined>,
    icon2:,
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
        
            <div id="menu">
              <ul>
                {menuConfig.map(function(value,index){
                  // console.log(index)
                  return (
                   <Row>
                     <Col span={4} >
                      <li key={index} id={index} ref={iD}  onMouseOver={handleHover} onMouseLeave={handleLeave}>
                        <div id={index}  className="menu_icon">
                             <div className="menu__icon1">
                             <span id={index}>-</span>
                            <p id={index}>{value.text}</p>
                             </div>
                            <span id={index}></span>
                        </div>
                    </li>
                    </Col>
                   </Row>
                  )
                })}
              </ul>
            </div>
  )
}

export default Banner