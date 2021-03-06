import { map } from "lodash"
import React from "react"
import { useDispatch } from "react-redux"
import { useFormHook } from "../../../../hooks/useForm"
import FactoryField from "../../../utils/FactoryField"
import "./LoginContent.css"
import { startLogin } from "../../../../redux/actions/authActions"
import { Formik } from "formik"
import * as Yup from "yup"
import { Form, SubmitButton } from "formik-semantic-ui-react"

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
      icon: "at",
      name: "email",
      type: "text",
      value: email,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-password",
      placeholder: "Password",
      icon: "user secret",
      name: "password",
      type: "password",
      autoComplete: "on",
      value: password,
      onChange: handleLoginInputChange,
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
      onSubmit={(_, { setSubmitting }) => {
        onHandleSubmit()
        setTimeout(() => {
          setSubmitting(false)
        }, 1000)
      }}
    >
      <Form size="large" data-cy="auth-login-modal">
        {map(configForm, (el, index) => (
          <FactoryField key={index} {...el} data-cy={el.id} />
        ))}
        <div
          className="container-text-register"
          onClick={handleClick}
          data-cy="button-to-register"
        >
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
