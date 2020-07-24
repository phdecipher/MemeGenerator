import React from 'react'

function Product(props) {

    const divStyle = {
        backgroundColor: "#8effdb",
        padding: 20,
        margin: 20,
        width: 400,
        borderRadius: "10px",
        boxShadow: "10px 10px 5px grey"
    }

    return(
        <div style={divStyle}>
            <center><h2>{props.name}</h2></center>
            <h3>Cost: ${props.price}</h3>
            <h3>Description: {props.description}</h3>
        </div>

    )
}

export default Product