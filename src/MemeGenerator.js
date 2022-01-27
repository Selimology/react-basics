import React, { Component } from "react"

class MemeGenerator extends Component {
  constructor() {
    super()

    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((req) => req.json())
      .then((req) => {
        const { memes } = req.data
        console.log(memes[0])
        this.setState({
          allMemeImgs: memes,
        })
      })
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randomMemeImage = this.state.allMemeImgs[randomNumber].url
    this.setState({
      randomImg: randomMemeImage,
    })
    console.log("works")
  }

  render() {
    return (
      <div className="forms">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            type="text"
          />
          <br />
          <input
            placeholder="Bottom Text"
            name="bottomText"
            value={this.state.bottomText}
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <button>Generate</button>
        </form>
        <div>
          <img src={this.state.randomImg} alt="" />
          <h2>{this.state.topText}</h2>
          <h2>{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}
export default MemeGenerator
