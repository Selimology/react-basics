import React from "react"

// https://swapi.dev/api/people/1/
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      character: {},
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch("https://swapi.dev/api/people/1/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          character: data,
          isLoading: false,
        })
      })
  }
  render() {
    const text = this.state.isLoading ? "loading..." : this.state.character.name
    return (
      <div>
        <p>{text}</p>
      </div>
    )
  }
}

export default App
