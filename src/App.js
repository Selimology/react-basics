import React, { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)

  // function increment() {
  //   setCount((prevCount) => {
  //     return prevCount + 1
  //   })
  // }
  // function decrement() {
  //   setCount((prevCount) => {
  //     return prevCount - 1
  //   })
  // }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
    </div>
  )
}
export default App
