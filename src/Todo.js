import React from 'react'


function Todo(props) {

    return(

        <div>

            <input type="checkbox"/> 
            <span style={{textDecoration: props.deed.completed ? "line-through" : "none" }}>{props.deed.text}</span>
            <hr/>

        </div>

    )

}


export default Todo