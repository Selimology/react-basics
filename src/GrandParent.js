import React, { Component } from "react"
import Parent from "./Parent"

class GrandParent extends Component {
  render() {
    console.log("[GP][][][] ")
    return (
      <div>
        <p>I'm GrandParent Component</p>
        <Parent />
        <Parent />
      </div>
    )
  }
}

export default GrandParent
