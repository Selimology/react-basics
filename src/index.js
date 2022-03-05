import React from "react"
import ReactDOM from "react-dom"
import SearchMovies from "./SearchMovies"
import "./index.css"

function Main() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies />
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById("root"))
