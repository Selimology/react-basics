import React from "react"
import Listitem from "./Listitem"

function List({ items }) {
  return (
    <>
      {items.map((item) => (
        <Listitem key={item.id} item={item} />
      ))}
    </>
  )
}

export default List
