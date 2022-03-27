import React, { Component } from "react"
import GrandParent from "./GrandParent"

class App extends Component {
  state = {
    count: 0,
  }
  increment = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  render() {
    console.log("[GP][P][C][GC] App rendered")
    return (
      <div>
        <button onClick={this.increment}>+1</button>
        <h2>{this.state.count}</h2>

        <p>I'm the App Component</p>
        <GrandParent count={this.state.count} />
        <GrandParent />
      </div>
    )
  }
}

export default App
