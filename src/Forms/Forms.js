import React from 'react'

class Forms extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            theOne: false,
            decision: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ theOne: checked }) :this.setState({ [name]: value })
    }

    render() {

        const sheTheOne = this.state.theOne ? "Yes, she's the one!!" : ":("
        const myDecision = this.state.decision === 'Love' ? 'Marry her!' : "You're pathetic!"

        return(
            <div>
                <form>
                    <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange}/>
                    <br />
                    <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange}/>
                    <br />
                
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <input type="checkbox" checked={this.state.theOne}  onChange={this.handleChange}/> Is she the one?
                
                    

                    <input type="radio" checked={this.state.decision === 'Love'} onChange={this.handleChange} name="decision" value="Love" /> Love
                    <input type="radio" checked={this.state.decision === 'Leave'} onChange={this.handleChange} name="decision" value="Leave" /> Leave
                    
                    <h1>{sheTheOne}</h1>
                    <h1>{myDecision}</h1>
                </form>
            </div>
        )
    }
}

export default Forms