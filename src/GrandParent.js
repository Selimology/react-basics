import React from "react"
import Parent from "./Parent"

function GrandParent(props) {
  console.log("[GP][][][] ")
  return (
    <div>
      <p>I'm GrandParent Component</p>
      <Parent />
      <Parent />
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  /*
  Return true if next prop and prev prop is same
  */
}

export default React.memo(GrandParent, areEqual)
