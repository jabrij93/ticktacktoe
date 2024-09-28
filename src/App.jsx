import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("INSPECT button", count)

  let square = []

  return (
    <div>
      <p> Hello, world !</p>

      <div 
        style={{ 
          height: '50px',
          width: '50px',
          border: 'solid black 2px',
          color: 'grey',
          display: 'inline-block',
        }}
      > 
    
        {square.push[
          <div 
            style={{
            display:'grid',
            gridTemplateColumns: 'repeat(3, 50px)',
          }}>
          </div>
        ]}
        
      </div>
      
      <button onClick={()=>setCount(count + 1)}>CLICK ME</button>
      <p> COUNT : {count} </p>
    </div>
  )
}

export default App
