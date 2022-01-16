import React from "react"

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          name="firstname"
          value={props.data.firstname}
          onChange={props.handleChange}
          type="text"
          placeholder="First Name"
        />
        <br />
        <input
          name="lastname"
          value={props.data.lastname}
          onChange={props.handleChange}
          type="text"
          placeholder="Last Name"
        />
        <br />
        <input
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          type="number"
          placeholder="Age"
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male <br />
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>

        <br />
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handleChange}
        >
          <option value="">Choose a destination</option>
          <option value="turkey">turkey</option>
          <option value="albania">albania</option>
          <option value="america">america</option>
        </select>
        <br />

        <label>
          Vegan
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.data.isVegan}
          />{" "}
          <br />
          Kosher
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.isKosher}
          />{" "}
          <br />
          Lactose Free
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
          />
          <br />
        </label>
        <br />
        <button>Submit</button>
      </form>

      <h2>Enter information</h2>
      <p>
        Your name: {props.data.firstname} {props.data.lastname}
      </p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender} </p>
      <p>Your destination: {props.data.destination} </p>
      <p>
        Your diet : <br />
        Vegan: {props.data.isVegan} <br />
        Kosher: {props.data.isKosher} <br />
        Lactose Free: {props.data.isLactoseFree}{" "}
      </p>
    </main>
  )
}

export default FormComponent
