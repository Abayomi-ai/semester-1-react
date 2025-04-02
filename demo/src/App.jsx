import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConditionalConponent from './compomet/ConditionalComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
      <ConditionalConponent></ConditionalConponent>
    </>
  )
}

export default App
