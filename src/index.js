import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

function Main() {
  return (
    <div className="container">
      <App />
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById("root"))
