import React, {Component} from 'react'

class NewApp extends Component {
    

    constructor() {
        super()

        this.state = {
            character: {},
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    return {
                        character: data,
                        loading: false
                    }
                })
            })
    }

    render() {
        const text = this.state.loading ? "Loading.." : this.state.character.name
        return (
            <div>
                <h1>{text}.</h1>
            </div>
        )
    }


}

export default NewApp