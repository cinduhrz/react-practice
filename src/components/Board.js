import Square from "./Square"

function Board(props){
    return (
        // this className is also a prop
        // jsx treats a prop called className as a class; it adds a class to the created html element
        <div className="board" >
            <Square/>
            <Square/>
            <Square/>

            <Square/>
            <Square/>
            <Square/>

            <Square/>
            <Square/>
            <Square/>
        </div>
    )
}

export default Board