import React from 'react'
import FormComponent from './FormComponent'

class FormContainer extends React.Component {
   
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
            <FormComponent 
                handleChange={this.handleChange}
                {...this.state}
            />
        )
    }


}

export default FormContainer