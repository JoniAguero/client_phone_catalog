import { map } from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormHook } from '../../../../hooks/useForm'
import FactoryField from '../../../utils/FactoryField'
import './LoginContent.css'
import { startLogin } from '../../../../redux/actions/authActions'
import { useSnackbar } from 'react-simple-snackbar'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  Form,
  SubmitButton,
} from 'formik-semantic-ui-react'

const LoginContent = (props) => {
  
  const dispatch = useDispatch()
  const { errors } = useSelector( state => state )

  // useEffect(() => {
  //   openSnackbar(errors.error)
  // }, [errors.time])
    
  const [openSnackbar] = useSnackbar()

  const { handleClick } = props
  const [formLoginValues, handleLoginInputChange] = useFormHook({
    email: '',
    password: '',
  })

  const { email, password } = formLoginValues

  const configForm = [
    { 
      id: 'input-email',
      placeholder: 'Email',
      icon: 'at',
      name: 'email',
      type: 'text',
      value: email,
      onChange: handleLoginInputChange,
    },
    { 
      id: 'input-password',
      placeholder: 'Password',
      icon: 'user secret',
      name: 'password',
      type: 'password',
      autoComplete: 'on',
      value: password,
      onChange: handleLoginInputChange,
    },
  ]

  const initialValues = {
    email,
    password,
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('Required'),
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
          setSubmitting(false);
        }, 1000);
      }}
    >
      <Form size='large'>
        {map(configForm, (el, index) => (
          <FactoryField
            key={index}
            {...el}
          />
        ))}
        <div className='container-text-register' onClick={handleClick}>
          You do not have an account ?
        </div>
        <div className='button'>
          <SubmitButton fluid secondary>
            Login
          </SubmitButton>
        </div>
      </Form>
    </Formik>
  )
}

export default LoginContent
