import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Squares() {
  let squares = []

  for (let i=0; i<9; i++) {
    squares.push(
      <div 
        key={i}
        style={{
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
        height: '160px',
        width: '160px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 50px)',
        justifyContent: 'start',
      }}
    > {squares}</div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  console.log("INSPECT button", count)

  return (
    <div style={{display: 'flex', flexDirection: 'column', flex: '1', alignItems: 'center', gap: '20px' }}>
      <div>
      <Squares /> 
      </div> 

      <div>
        <p> Hello, world !</p>
        
        <button onClick={()=>setCount(count + 1)}>CLICK ME</button>
        
        <p> COUNT : {count} </p>
      </div>
    </div>
  )
}

export default App
