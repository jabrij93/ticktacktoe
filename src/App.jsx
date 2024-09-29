import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Squares() {
  let squares = []

  for (let i=0; i<9; i++) {
    squares.push(
      <div style={{
        height:'50px',
        width:'50px',
        style:'inline-block',
        border:'solid black 2px',
      }}/>
    )
  }

  return (
    <div
      style={{
        height: '50px',
        width: '50px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 50px)'
      }}
    > {squares}</div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  console.log("INSPECT button", count)

  return (
    <div>
      <Squares />  

      <p> Hello, world !</p>
      
      <button onClick={()=>setCount(count + 1)}>CLICK ME</button>

      
      <p> COUNT : {count} </p>
    </div>
  )
}

export default App
