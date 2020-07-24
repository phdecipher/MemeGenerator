import React from 'react'

class FormsPractice extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            isVegan: false,
            isKosher: false,
            isLactoseFree: false

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ 
            [name]: checked 
        }) : this.setState({ [name]: value })
    }

    handleSubmit() {
        const firstName = this.state.firstName
        const lastName = this.state.lastName
        const age = this.state.age
        const gender = this.state.gender
        const destination = this.state.destination
        const restrictions = 
            (this.state.isVegan ? "Vegetarian, " : "") + 
            (this.state.isKosher ? "Kosher, " : "") + 
            (this.state.isLactoseFree ? "Lactose Free" : "")

        alert(
            'First Name: ' + firstName + '\n' +
            'Last Name: ' + lastName + '\n' +
            'Age: ' + age + '\n' +
            'Gender: ' + gender + '\n' +
            'Destination: ' + destination + '\n' +
            'Dietary Restrictions: ' + restrictions
        )

        this.preventDefault()
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label> <br />

                    <input 
                        type="text" 
                        name="firstName"
                        value={this.state.firstName} 
                        placeholder="First Name" 
                        onChange={this.handleChange} /> <br />

                    <input 
                        type="text" 
                        name="lastName" 
                        value={this.state.lastName}
                        placeholder="Last Name" 
                        onChange={this.handleChange} /> <br /> <br />
                    
                    <label>Age:</label> <br /> 
                    <input 
                        type="number"
                        name="age" 
                        value={this.state.age}
                        onChange={this.handleChange} /> <br /> <br />

                    <label>Gender: </label>
                    
                    <input 
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.gender === 'Male'}
                        onChange={this.handleChange} /> Male
                    
                    <input 
                        type="radio" 
                        name="gender"
                        value="Female"
                        checked={this.state.gender === 'Female'}
                        onChange={this.handleChange} /> Female <br/> <br/>

                    <label>Destination: </label>
                    
                    <select
                        
                        name="destination" 
                        onChange={this.handleChange}
                        value={this.state.destination}>

                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="Japan">Japan</option>
                        <option value="Korea">Korea</option>
                        <option value="Singapore">Singapore</option>

                    </select> <br /> <br />

                    <label>Dietary Restrictions: </label> <br/>

                    <input 
                        type="checkbox" 
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.isVegan} /> Vegetarian <br/>
                    <input 
                        type="checkbox" 
                        name="isKosher"
                        onChange={this.handleChange}
                        checked={this.state.isKosher}/> Kosher <br/>
                    <input 
                        type="checkbox" 
                        name="isLactoseFree"
                        onChange={this.handleChange}
                        checked={this.state.isLactoseFree}/> Lactose Free <br/>

                    <br />

                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default FormsPractice