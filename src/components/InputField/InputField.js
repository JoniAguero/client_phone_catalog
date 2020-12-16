import React from "react"
import { Input } from "formik-semantic-ui-react"
import "./InputField.css"

const InputField = (props) => {
  const {
    id,
    placeholder,
    inputType,
    iconName,
    inputName,
    handleChange
  } = props

  return (
    <div className="container-input">
      <Input
        id={id}
        name={inputName}
        icon={iconName}
        placeholder={placeholder}
        type={inputType}
        focus
        fluid
        errorPrompt
        onChange={handleChange}
      />
    </div>
  )
}

export default InputField
