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


function App() {
  const items = fetch('/data.json')
    .then(res => res.json())


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <Suspense>
        <CardContainer items={items}></CardContainer>

      </Suspense>
      <Started></Started>
     



    </>
  )
}

export default App
