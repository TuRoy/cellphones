import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DataProductDetail from './layout/dataProductDetail'
import CardProduct from './layout/CardProduct';
import Home from './layout/Home';
import SignUp from './layout/SignUp';
import Payment__layout from './layout/Payment__layout';
import GetAllProduct from './layout/GetAllProduct';
import Profile from './layout/Profile';
import SignIn from './layout/SignIn';
import IndexPrivate from './PrivateRouter/IndexPrivate';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeloading } from './redux-toolkit/loading';
import axios from 'axios';

function App() {

  let load = useSelector(function (state) {
    return state.loading
  })
  const dispatch = useDispatch()
  const token = window.localStorage.getItem('token =')
  useEffect(() => {
    setTimeout(() => {
      dispatch(removeloading(false))
    }, 2000);
    
  })

  return (

    <BrowserRouter>
      <Routes>
        <Route path='ProductDetail/:nameProductDetail' element={< DataProductDetail />}></Route>
        <Route path='card' element={<IndexPrivate><CardProduct></CardProduct></IndexPrivate>}></Route>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/allproduct' element={<GetAllProduct></GetAllProduct>}></Route>
        <Route path='/home' element={load ? <div className='test123' > <img src='https://www.nodemy.vn/images/1.svg'></img>
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h3 class="animate-charcter"> B4 MÃI ĐỈNH</h3>
              </div>
            </div>
          </div>
        </div> : <Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/payment-info' element={<IndexPrivate><Payment__layout></Payment__layout></IndexPrivate>}></Route>
        <Route path='/profile/:profile' element={<IndexPrivate><Profile></Profile></IndexPrivate>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
