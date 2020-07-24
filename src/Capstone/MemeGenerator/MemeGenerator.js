import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            image: "https://imgflip.com/s/meme/One-Does-Not-Simply.jpg",
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleGenerate = this.handleGenerate.bind(this)
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const memeTwoBox = response.data.memes.filter(meme => {
                    return meme.box_count === 2
                })      
                this.setState({
                    allMemeImgs: memeTwoBox
                })

                console.log(this.state.allMemeImgs)
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleGenerate(event) {
       const randomImg = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url
        this.setState(() => {
            return {
                image: randomImg
            }
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleGenerate}>
                <center>
                    <input 
                        type="text" 
                        name="topText" 
                        value={this.state.topText}
                        onChange={this.handleChange}
                        placeholder="Top Text"/>
                    <input 
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}  
                        placeholder="Bottom Text"/>
                    <br/>
                    <button>Generate!</button>
                    </center>
                </form>

                <br/>
                <center>

                    <div className="meme">
                        <img src={this.state.image} alt="" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>

                </center>
            </div>
        )
    }
}

export default MemeGenerator