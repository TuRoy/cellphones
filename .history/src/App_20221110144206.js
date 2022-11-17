import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Cart from './components/cart/Cart';
import DataProductDetail from './layout/dataProductDetail'
import CardProduct from './layout/CardProduct';
import Home from './layout/Home';
import SignUp from './layout/SignUp';
import Payment__layout from './layout/Payment__layout';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='ProductDetail' element={< DataProductDetail/>}></Route>
          <Route path='card' element={<CardProduct></CardProduct>}></Route>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/payment-info' element={<Payment__layout></Payment__layout>}></Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
