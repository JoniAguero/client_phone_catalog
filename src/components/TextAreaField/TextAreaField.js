import React from "react"
import { TextArea } from "formik-semantic-ui-react"
import "./TextAreaField.css"

const TextAreaField = (props) => {

  return (
    <div className="container-textarea">
      <TextArea
        {...props}
        errorPrompt
      />
    </div>
  )
}

export default TextAreaField
