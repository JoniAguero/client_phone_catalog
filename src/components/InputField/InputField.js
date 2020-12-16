import React from "react"
import { Input } from "formik-semantic-ui-react"
import "./InputField.css"

const InputField = (props) => {

  return (
    <div className="container-input">
      <Input
        {...props}
        focus
        fluid
        errorPrompt
      />
    </div>
  )
}

export default InputField
