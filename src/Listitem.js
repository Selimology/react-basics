import React from "react"

function Listitem({ item }) {
  return (
    <>
      <li>{JSON.stringify(item)}</li>
    </>
  )
}

export default Listitem
