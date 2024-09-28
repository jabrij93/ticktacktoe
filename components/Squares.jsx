let square = [];

const Squares = ({ data }) => {

    for (let i=0; i<5; i++) {
        square.push(
        <div 
            style={{ 
            height: '70px',
            width: '70px',
            border: 'solid black 2px',
            color: 'grey',
            display: 'inline-block',
            }}
        /> 
        )
    }

    return (
        <div style=
        {{
            display:'grid',
            gridTemplateColumns: 'repeat(3, 70px)'
        }}> {square} </div>
    )
}

export default Squares;