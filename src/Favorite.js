import React from "react"
import { withToggler } from "./HOC/withToggler"

function Favorite(props) {
  return (
    <div>
      <h3>Click heart for favorite</h3>
      <span onClick={props.toggle}>{props.on ? "Like" : "Dislike"}</span>
    </div>
  )
}

const superChargedFavoriteComponent = withToggler(Favorite, {
  defaultOnValue: false,
})
export default superChargedFavoriteComponent
