import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Rating from './components/Rating'
import CardContainer from './components/CardContainer'
import Started from './components/Started'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
const items = fetch('/data.json')
  .then(res => res.json())

function App() {

  const [isAdded, setIsAdded] = useState([])


  return (
    <>
      <Navbar isAdded={isAdded} setIsAdded={setIsAdded}></Navbar>
      <Banner></Banner>
      <Rating></Rating>
     
        <CardContainer items={items} isAdded={isAdded} setIsAdded={setIsAdded}></CardContainer>

      
      <Started></Started>
      <Pricing></Pricing>

      <Footer></Footer>


    </>
  )
}

export default App
