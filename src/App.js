import React, { useState } from "react"

function App() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" })
  const [contactsData, setContactsData] = useState([])

  function handleChange(event) {
    const { name, value } = event.target
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [name]: value,
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setContactsData((prevContacts) => {
      return [...prevContacts, inputData]
    })
  }

  const contacts = contactsData.map((contact) => {
    return (
      <h2 key={contact.firstName + contact.lastName}>
        First Name: {contact.firstName} Last Name: {contact.lastName}{" "}
      </h2>
    )
  })
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="FirstName"
          name="firstName"
          value={inputData.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleChange}
        />

        <button>add contact</button>
      </form>
      {contacts}
    </>
  )
}
export default App
