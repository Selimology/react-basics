import React from "react"

function GrandChildren(props) {
  console.log("[][][][GC] ")
  return (
    <div>
      <p>I'm Grand Children Component</p>
    </div>
  )
}

export default React.memo(GrandChildren)
