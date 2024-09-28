import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Squares() {
  let square = [];

    for (let i=0; i<9; i++) {
      square.push(<div 
                key={i}
                style={{
                height: '60px',
                width: '60px',
                display: 'inline-block',
                border: 'solid black 2px'
              }}></div>
    )}

    return (
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 60px)'
        }}>{square}</div>
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
