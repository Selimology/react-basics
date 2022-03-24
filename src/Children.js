import React, { Component } from "react"
import GrandChildren from "./GrandChildren"

class Children extends Component {
  render() {
    console.log("[][][C][] ")
    return (
      <div>
        <p>I'm Children Component</p>
        <GrandChildren />
        <GrandChildren />
      </div>
    )
  }
}

export default Children
