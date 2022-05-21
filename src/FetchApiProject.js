import { useState, useEffect } from "react"
import Form from "./Form"
import List from "./List"

function FetchApiProject() {
  const API_URL = "https://jsonplaceholder.typicode.com/"

  const [reqType, setreqType] = useState("users") //comments or posts
  //this is the data that is being fetched
  const [items, setItems] = useState([])

  //runs whenever a reqType changes
  useEffect(() => {
    const fetchitem = async () => {
      try {
        // url + reqtype
        const response = await fetch(`${API_URL}${reqType}`)
        const data = await response.json()
        console.log(data)
        setItems(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchitem()
  }, [reqType])
  return (
    <>
      <div>
        <Form reqType={reqType} setreqType={setreqType} />
        <List items={items} />
      </div>
    </>
  )
}

export default FetchApiProject
