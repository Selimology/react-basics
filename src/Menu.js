import React from "react"
import { withToggler } from "./HOC/withToggler"

function Menu(props) {
  return (
    <div>
      <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu</button>
      <nav style={{ display: props.on ? "block" : "none" }}>
        <h6>Signed by Kertekin</h6>
        <a> Your Profile</a>
        <a> Repositories</a>
        <a>Your Life</a>
        <a> Your Homework</a>
      </nav>
    </div>
  )
}

const superChargedMenuComponent = withToggler(Menu, {
  defaultOnValue: true,
})
export default superChargedMenuComponent
