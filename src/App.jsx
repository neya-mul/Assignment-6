import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Neyamul</h1>
      <div className="navbar bg-base-100 shadow-sm">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
    </>
  )
}

export default App
