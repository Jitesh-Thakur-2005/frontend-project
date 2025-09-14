import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nev from './com/Nev'
import Hero from './com/body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nev/>
  <Hero/>
    </>
  )
}

export default App
