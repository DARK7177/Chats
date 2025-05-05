import { useState } from 'react'
import './App.css'
import SessionInit from './components/SessionInit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SessionInit />
    </>
  )
}

export default App
