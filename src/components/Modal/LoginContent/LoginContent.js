import { map } from "lodash"
import React from "react"
import { useDispatch } from "react-redux"
import { useFormHook } from "../../../hooks/useForm"
import InputField from "../../InputField/InputField"
import "./LoginContent.css"
import { startLogin } from "../../../redux/actions/authActions"

import { Formik } from "formik"
import * as Yup from "yup"
import {
  Form,
  SubmitButton,
} from "formik-semantic-ui-react"

const LoginContent = (props) => {
  const dispatch = useDispatch()
  const { handleClick } = props
  const [formLoginValues, handleLoginInputChange] = useFormHook({
    email: "",
    password: "",
  })

  const { email, password } = formLoginValues

  const configForm = [
    { 
      id: "input-email",
      placeholder: "Email",
      iconName: "at",
      inputName: "email",
      inputType: "text",
      inputValue: email,
      handleChange: handleLoginInputChange,
    },
    { 
      id: "input-password",
      placeholder: "Password",
      iconName: "user secret",
      inputName: "password",
      inputType: "password",
      inputValue: password,
      handleChange: handleLoginInputChange,
    },
  ]

  const initialValues = {
    email,
    password,
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
  })

  const onHandleSubmit = () => {
    dispatch(startLogin(email, password))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onHandleSubmit}
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
          You do not have an account ?
        </div>
        <div className="button">
          <SubmitButton fluid secondary>
            Login
          </SubmitButton>
        </div>
      </Form>
    </Formik>
  )
}

export default LoginContent
