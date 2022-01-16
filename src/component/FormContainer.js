import React, { Component } from "react"
import FormComponent from "./FormComponent"

class FormContainer extends Component {
  constructor() {
    super()
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      destination: "albania",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checked"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        })
  }
  render() {
    return <FormComponent data={this.state} handleChange={this.handleChange} />
  }
}

export default FormContainer
