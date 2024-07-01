import { useState } from 'react'
import './App.css'
import Passgenerate from './Component/Passgenerate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Passgenerate/>
    </>
  )
}

export default App
