import React from 'react'
import Banner from '../components/Banner/Banner'
import Header from '../components/header/Header'
import HomeContent from '../components/homeContent/HomeContent'



function Home() {

  return (
    <div>
      <Header></Header>
      <div className="component__banner"><Banner></Banner></div>
     <div className="components__homecontent"> <HomeContent></HomeContent></div>
    </div>

  )
}

export default Home