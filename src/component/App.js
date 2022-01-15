import React from "react"
import Conditional from "./Conditional"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      unreadMessages: ["First message", "Second Message", "Third"],
    }
  }

  render() {
    return (
      {
        /* If the first statement is true, it applies and checks the second statement
        You may also use terniary operator*/
      },
      (
        <div>
          {this.state.unreadMessages.length > 0 && (
            <h2>{this.state.unreadMessages.length} unread messages</h2>
          )}
        </div>
      )
    )
  }
}

export default App
