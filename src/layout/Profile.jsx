import Footer from '../components/footer/Footer'
import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import './Profile.css'
import { useNavigate, useParams } from 'react-router-dom'
import { message } from 'antd'
import axios from 'axios'


function Profile() {
  const nav = useNavigate()
  let param = useParams().profile
  const [paramData, setParamData] = useState()
  let token  = window.localStorage.getItem('token')
  useEffect(() => {
    setParamData(param)
  }, [])

  const handleChangeOption = (value) => {
    if (document.querySelector('.Profile__target')) {
      document.querySelector('.Profile__target').classList.remove('Profile__target')
    }
    document.querySelector(`.${value}`).classList.add('Profile__target')
    if (value == 'logout1') {
      if (window.confirm('ĐĂNG XUẤT')) {
        window.localStorage.removeItem('username')
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('oderData')
        window.location.assign('/home')
      }
    } else {
      window.location.assign(`/profile/${value}`)
    }
    if(value == 'info' ){
      axios.get('https://shope-b3.thaihm.site/api/auth/get-loged-in-user', {
        headers: {
          Authorization: `Bearer ${token}`
      }
      }).then(value=>{
        console.log(value);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }



  const handleChangePass = () => {
    let oldpass = document.getElementById('oldpass').value
    let newpass = document.getElementById('newpass').value
    let newpasscf = document.getElementById('newpasscf').value
    if(newpass.length < 6 || newpass.split('').find(value => value == ' ') ){
      return message.error('sai định dạng')
    }
    if( newpass !== newpasscf){
      return message.error('mật khẩu không khớp')
    }
  
    var data = JSON.stringify({
      "oldPass": oldpass,
      "newPass": newpass
    });
    
    var config = {
      method: 'patch',
      url: 'https://shope-b3.thaihm.site/api/user/change-password',
      headers: { 
        'Authorization': token, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(value=>{
      message.success('Đổi mật khẩu thành công')
      window.localStorage.removeItem('username')
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('oderData')
      window.location.assign('/home')
    })
    .catch(err=>{
      message.error('Đang chờ server ...')
    })
  }


  return (
    <div>
      <Header></Header>
      <div className="Profile">
        <div className="Profile__content">
          <div className="Profile__content__left">
            <div onClick={function () { handleChangeOption('info') }} className={`info Profile__content__left__btn ${paramData == 'info' ? 'Profile__target' : ''}`}>Thông tin cá nhân</div>
            <div onClick={function () { handleChangeOption('changePassword') }} className={` changePassword Profile__content__left__btn ${paramData == 'changePassword' ? 'Profile__target' : ''}`}>Cập nhật mật khẩu</div>
            <div onClick={function () { handleChangeOption('avatar') }} className={`avatar Profile__content__left__btn ${paramData == 'avatar' ? 'Profile__target' : ''}  `}>Cập nhật ảnh đại diện</div>
            <div onClick={function () { handleChangeOption('logout1') }} className={`logout1 Profile__content__left__btn ${paramData == 'logout1' ? 'Profile__target' : ''} `}>Thoát tài khoản</div>
          </div>
          <div className="Profile__content__right">
            {paramData == 'info' ? <div className='Profile__content__right__avater'>
            <img src="https://ecdn.game4v.com/g4v-content/uploads/2019/10/Update-game4v.jpg" alt="" />
            </div> :
              paramData == 'changePassword' ? <div className='Profile__content__right__password'>
                <div className="Profile__content__right__password__input"><p>Mật khẩu hiện tại:</p> <input id='oldpass' type="text" placeholder='Old passord' /></div>
                <div className="Profile__content__right__password__input"><p>Mật khẩu mới:</p> <input id='newpass' type="text" placeholder='New password' /></div>
                <div className="Profile__content__right__password__input"><p>Mật khẩu mới:</p> <input id='newpasscf' type="text" placeholder='New password *' /></div>
                <button className='Profile__content__right__password__btn' onClick={handleChangePass}>Đổi Mật Khẩu</button>
              </div> :
                paramData == 'avatar' ? <div className='Profile__content__right__avater'>
                  <img src="https://ecdn.game4v.com/g4v-content/uploads/2019/10/Update-game4v.jpg" alt="" />
                </div> : ''}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Profile