import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Topbar from '../Components/Topbar'
import homeContent from '../Components/homeContent'
import { Carousel } from 'react-bootstrap'
import HomeContent from '../Components/homeContent'
import FactSection from '../Components/FactSection'
import AboutSection2 from '../Components/AboutSection2'
import AboutSection from '../Components/AboutSection'
import ProjectSection from '../Components/ProjectSection'
const Homepage = () => {
  return (

<div>
    <Topbar />
    <Header />
<HomeContent />

<FactSection />
<AboutSection />
<AboutSection2/>
<ProjectSection />
<FactSection />
    <Footer />
</div>
  


  )
}

export default Homepage

