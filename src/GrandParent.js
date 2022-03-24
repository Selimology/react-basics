import React, { PureComponent } from "react"
import Parent from "./Parent"

class GrandParent extends PureComponent {
  /* 
    
    PureComponent does the job of shouldComponentUpdate,
    it automatically compares two different objects
    and returns false and true accordingly.
    
*/

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
