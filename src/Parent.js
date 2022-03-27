import React from "react"
import Children from "./Children"

export default React.memo(function Parent(props) {
  return (
    <div>
      <p>I'm Parent Component</p>
      <Children />
      <Children />
    </div>
  )
})

/* You may simply export default React.memo(Parent) */
