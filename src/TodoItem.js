import React from 'react'

function TodoItem(props) {

    const stylez = {
        fontFamily: "Inconsolata",
        fontSize: 30
    }

    const contain = {
        backgroundColor: "ffffff",
        margin: 50,
        padding: 20,
        border: "2px solid black",
        boxShadow: "5px 10px 20px grey",
        borderRadius: 5
    }

    const myName = "Al-Junius"
    
    const styleComplete = {
        fontFamily: "Inconsolata",
        fontSize: 30,
        textDecoration: "line-through",
        color: "gray"
    }
    

    return(
        <div style={contain}>
            <input type="checkbox" 
            checked={props.item.completed} 
            onChange={() => {
                props.hC(props.item.id)
            }} /> 
            <span style={props.item.completed ? styleComplete : stylez}>{props.item.text}, {myName}.</span> 
            <br/>
        </div>
    )

}

export default TodoItem