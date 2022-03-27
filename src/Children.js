import React, { memo } from "react"
import GrandChildren from "./GrandChildren"

function Children(props) {
  console.log("[][][C][] ")
  return (
    <div>
      <p>I'm Children Component</p>
      <GrandChildren />
      <GrandChildren />
    </div>
  )
}
export default memo(Children)
