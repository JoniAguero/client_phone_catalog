import React from "react"
import InputField from "../InputField"
import TextAreaField from "../TextAreaField"


const FactoryField = (props) => {
  switch (props.type) {
    case "text":
      return <InputField {...props} />
    case "password":
      return <InputField {...props} />
    case "number":
      return <InputField {...props} />
    case "textarea":
      return <TextAreaField {...props} />
    default:
      break
  }

}

export default FactoryField
