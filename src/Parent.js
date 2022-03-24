import React, { PureComponent } from "react"
import Children from "./Children"

class Parent extends PureComponent {
  render() {
    console.log("[][P][][] ")
    return (
      <div>
        <p>I'm Parent Component</p>
        <Children />
        <Children />
      </div>
    )
  }
}

export default Parent
