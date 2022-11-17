import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../components/Banner/Banner'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import HomeContent from '../components/homeContent/HomeContent'
import './Home.css'


function Home() {
 
  const top = () => {
    window.scrollTo(0,0)
  }
  console.log(document.body.offsetHeight);

  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.documentElement.scrollTop > 1500) {
      document.getElementById("back-to-top").className = "showbtn__back__to__top";
    } else {
      document.getElementById("back-to-top").className = "hidebtn__back__to__top";
    }
  }
  return (
    <div className='App'>
      <Header></Header>
      <div className="component__banner"><Banner></Banner></div>
     <div className="components__homecontent"> {  <HomeContent></HomeContent>}</div>
     <div className="components_footer"> <Footer></Footer></div>
    <button onClick={top} id='back-to-top'><i class="fa-solid fa-chevron-up"></i></button> 
    </div>

  )
}

export default Home