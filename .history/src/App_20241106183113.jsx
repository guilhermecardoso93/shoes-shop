import { useState } from 'react'
import './App.css'
import { Navbar } from './assets/components/Navbar'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

