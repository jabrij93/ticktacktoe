const Squares = () => {
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

  export default Squares;