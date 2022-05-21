import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import ThemeContext from "./ThemeContext"
import FetchApiProject from "./FetchApiProject"

ReactDOM.render(
  <ThemeContext.Provider value={"dark"}>
    <FetchApiProject />
  </ThemeContext.Provider>,
  document.getElementById("root")
)
