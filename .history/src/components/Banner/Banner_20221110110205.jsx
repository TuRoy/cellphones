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
        
            <div id="menu">
              <ul>
                {menuConfig.map(function(value,index){
                  return (
                    <li key={index}>
                        .menu
                    </li>
                  )
                })}
              </ul>
            </div>
    
       
   
  )
}

export default Banner