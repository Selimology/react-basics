import React from "react"
import FormButton from "./FormButton"

//rather than simply using props.reqType , we destructure
function Form({ reqType, setreqType }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormButton
          buttonTitle="users"
          reqType={reqType}
          setreqType={setreqType}
        />
        <FormButton
          buttonTitle="posts"
          reqType={reqType}
          setreqType={setreqType}
        />
        <FormButton
          buttonTitle="comments"
          reqType={reqType}
          setreqType={setreqType}
        />
      </form>
    </>
  )
}

export default Form
