import React from 'react'

function FormComponent(props) {

    return (
        <main>
            <form onSubmit={props.handleSubmit}>
                    <label>Name: </label> <br />

                    <input 
                        type="text" 
                        name="firstName"
                        value={props.firstName} 
                        placeholder="First Name" 
                        onChange={props.handleChange} /> <br />

                    <input 
                        type="text" 
                        name="lastName" 
                        value={props.lastName}
                        placeholder="Last Name" 
                        onChange={props.handleChange} /> <br /> <br />
                    
                    <label>Age:</label> <br /> 
                    <input 
                        type="number"
                        name="age" 
                        value={props.age}
                        onChange={props.handleChange} /> <br /> <br />

                    <label>Gender: </label>
                    
                    <input 
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={props.gender === 'Male'}
                        onChange={props.handleChange} /> Male
                    
                    <input 
                        type="radio" 
                        name="gender"
                        value="Female"
                        checked={props.gender === 'Female'}
                        onChange={props.handleChange} /> Female <br/> <br/>

                    <label>Destination: </label>
                    
                    <select
                        
                        name="destination" 
                        onChange={props.handleChange}
                        value={props.destination}>

                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="Japan">Japan</option>
                        <option value="Korea">Korea</option>
                        <option value="Singapore">Singapore</option>

                    </select> <br /> <br />

                    <label>Dietary Restrictions: </label> <br/>

                    <input 
                        type="checkbox" 
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.isVegan} /> Vegetarian <br/>
                    <input 
                        type="checkbox" 
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.isKosher}/> Kosher <br/>
                    <input 
                        type="checkbox" 
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.isLactoseFree}/> Lactose Free <br/>

                    <br />

                    <button>Submit</button>
                </form>
        </main>
    )
}

export default FormComponent