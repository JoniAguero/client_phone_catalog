import { Form, SubmitButton } from "formik-semantic-ui-react"
import { map } from "lodash"
import React from "react"
import { useDispatch } from "react-redux"
import { useFormHook } from "../../../hooks/useForm"
import { startRegister } from "../../../redux/actions/authActions"
import InputField from "../../InputField/InputField"
import "./RegisterContent.css"

import { Formik } from "formik"
import * as Yup from "yup"

const RegisterContent = (props) => {

  const dispatch = useDispatch();
  const [formRegisterValues, handleRegisterInputChange] = useFormHook({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const { handleClick } = props
  const { name, email, password, confirmPassword } = formRegisterValues
  const configForm = [
    { 
      id: "input-name",
      placeholder: "Name",
      iconName: "tag",
      inputName: "name",
      inputType: "text",
      inputValue: name,
      handleChange: handleRegisterInputChange,
    },
    { 
      id: "input-email",
      placeholder: "Email",
      iconName: "at",
      inputName: "email",
      inputType: "text",
      inputValue: email,
      handleChange: handleRegisterInputChange,
    },
    { 
      id: "input-password",
      placeholder: "Password",
      iconName: "user secret",
      inputName: "password",
      inputType: "password",
      inputValue: password,
      handleChange: handleRegisterInputChange,
    },
    { 
      id: "input-confirmPassword",
      placeholder: "Repeat Password",
      iconName: "user secret",
      inputName: "confirmPassword",
      inputType: "password",
      inputValue: confirmPassword,
      handleChange: handleRegisterInputChange,
    },
  ]

  const initialValues = {
    name,
    email,
    password,
    confirmPassword
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Password Confirm is required"),
  })

  const handleSubmit = () => {
    dispatch(startRegister( email, password, name ) );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form size="large">
        {map(configForm, (el, index) => (
          <InputField
            id={el.id}
            key={index}
            inputType={el.inputType}
            placeholder={el.placeholder}
            iconName={el.iconName}
            inputName={el.inputName}
            inputValue={el.inputValue}
            handleChange={el.handleChange}
          />
        ))}
        <div className="container-text-register" onClick={handleClick}>
          You already have an account ?
        </div>
        <div className="button">
          <SubmitButton fluid secondary>
            Register
          </SubmitButton>
        </div>
      </Form>
    </Formik>
  )
}

export default RegisterContent
