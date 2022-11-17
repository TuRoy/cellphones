import React from 'react'
import Banner from '../components/SSS/Banner'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import HomeContent from '../components/homeContent/HomeContent'
import './Home.css'


function Home() {
  const top = () => {
    window.scrollTo(0,0)
  }
  return (
    <div className='App'>
      <Header></Header>
      <div className="component__banner"><Banner></Banner></div>
     <div className="components__homecontent"> <HomeContent></HomeContent></div>
     <div className="components_footer"> <Footer></Footer></div>
    <button onClick={top} className='back-to-top'><i class="fa-solid fa-chevron-up"></i></button> 
    </div>

  )
}

export default Home