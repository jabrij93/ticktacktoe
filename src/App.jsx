import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("INSPECT button", count)

  return (
    <div>
  

      <p> Hello, world !</p>
      
      <button onClick={()=>setCount(count + 1)}>CLICK ME</button>

      
      <p> COUNT : {count} </p>
    </div>
  )
}

export default App
