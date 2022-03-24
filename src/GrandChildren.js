import React, { Component, Pure } from "react"

class GrandChildren extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //in this case it is false, because both of them
    // are null or undefined
    if (nextProps.count === this.props.count) {
      return false //if it returns false, it won'update
    }
    return true // if it returns true, it will update render
  }

  render() {
    console.log("[][][][GC] ")
    return (
      <div>
        <p>I'm Grand Children Component</p>
      </div>
    )
  }
}

export default GrandChildren
