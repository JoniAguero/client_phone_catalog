import { Form, SubmitButton } from "formik-semantic-ui-react"
import { map } from "lodash"
import React from "react"
import { useDispatch } from "react-redux"
import { useFormHook } from "../../../../hooks/useForm"
import { startRegister } from "../../../../redux/actions/authActions"
import FactoryField from "../../../utils/FactoryField"
import "./RegisterContent.css"

import { Formik } from "formik"
import * as Yup from "yup"

const RegisterContent = (props) => {
  const dispatch = useDispatch()
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
      icon: "tag",
      name: "name",
      type: "text",
      value: name,
      onChange: handleRegisterInputChange,
    },
    {
      id: "input-email",
      placeholder: "Email",
      icon: "at",
      name: "email",
      type: "text",
      value: email,
      onChange: handleRegisterInputChange,
    },
    {
      id: "input-password",
      placeholder: "Password",
      icon: "user secret",
      name: "password",
      type: "password",
      value: password,
      onChange: handleRegisterInputChange,
    },
    {
      id: "input-confirmPassword",
      placeholder: "Repeat Password",
      icon: "user secret",
      name: "confirmPassword",
      type: "password",
      value: confirmPassword,
      onChange: handleRegisterInputChange,
    },
  ]

  const initialValues = {
    name,
    email,
    password,
    confirmPassword,
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
    dispatch(startRegister(email, password, name))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(_, { setSubmitting }) => {
        handleSubmit()
        setTimeout(() => {
          setSubmitting(false)
        }, 1000)
      }}
    >
      <Form size="large" data-cy="auth-register-modal">
        {map(configForm, (el, index) => (
          <FactoryField key={index} {...el} />
        ))}
        <div
          className="container-text-register"
          onClick={handleClick}
          data-cy="button-to-login"
        >
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
