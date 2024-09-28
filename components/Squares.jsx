let square = [];

const Squares = ({ data }) => {

    for (let i=0; i<9; i++) {
        square.push(
        <div 
            style={{ 
            height: '50px',
            width: '50px',
            border: 'solid black 2px',
            color: 'grey',
            display: 'inline-block',
            }}
        > 
        </div>
        )
    }

    return (
        <div style=
        {{
            display:'grid',
            gridTemplateColumns: 'repeat(3, 50px)'
        }}> {square} </div>
    )
}

export default Squares;