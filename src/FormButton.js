import React from "react"

function FormButton({ buttonTitle, reqType, setreqType }) {
  return (
    <button
      className={buttonTitle === reqType ? "selected" : null}
      type="button"
      onClick={() => setreqType(buttonTitle)}
    >
      {buttonTitle}
    </button>
  )
}

export default FormButton
