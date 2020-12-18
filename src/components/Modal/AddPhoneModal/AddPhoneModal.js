import React from "react"
import { map } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { Button, Modal, Segment } from "semantic-ui-react"
import { useFormHook } from "../../../hooks/useForm"
import { useSnackbar } from "react-simple-snackbar"
import { Formik } from "formik"
import * as Yup from "yup"
import { Form, SubmitButton } from "formik-semantic-ui-react"
import "./AddPhoneModal.css"
import FactoryField from "../../utils/FactoryField"
import { uiCloseModal } from "../../../redux/actions/uiActions"
import UploadImage from "../../UploadImage"
import { createPhone } from "../../../redux/actions/phonesActions"

const AddPhoneModal = () => {
  const dispatch = useDispatch()

  const [openSnackbar] = useSnackbar()

  const [formLoginValues, handleLoginInputChange] = useFormHook({
    name: "",
    price: "",
    manufacturer: "",
    description: "",
    color: "",
    imageFileName: "",
    screen: "",
    processor: "",
    ram: "",
    cameraBack: "",
    cameraFront: "",
    batery: "",
    storage: "",
  })

  const {
    name,
    price,
    manufacturer,
    description,
    color,
    imageFileName,
    screen,
    processor,
    ram,
    cameraBack,
    cameraFront,
    batery,
    storage,
  } = formLoginValues

  const initialValues = {
    name,
    price,
    manufacturer,
    description,
    color,
    imageFileName,
    screen,
    processor,
    ram,
    cameraBack,
    cameraFront,
    batery,
    storage,
  }

  const configForm = [
    {
      id: "input-name",
      placeholder: "Name",
      icon: "tag",
      name: "name",
      type: "text",
      focus: "true",
      value: name,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-manufacturer",
      placeholder: "Manufacturer",
      icon: "tag",
      name: "manufacturer",
      type: "text",
      value: manufacturer,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-price",
      placeholder: "Price",
      icon: "tag",
      name: "price",
      type: "number",
      value: price,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-description",
      placeholder: "Description",
      icon: "tag",
      name: "description",
      type: "textarea",
      value: description,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-screen",
      placeholder: "Screen",
      icon: "tag",
      name: "screen",
      type: "text",
      value: screen,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-processor",
      placeholder: "Processor",
      icon: "tag",
      name: "processor",
      type: "text",
      value: processor,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-ram",
      placeholder: "RAM",
      icon: "tag",
      name: "ram",
      type: "text",
      value: ram,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-camera-back",
      placeholder: "Camera Back",
      icon: "tag",
      name: "cameraBack",
      type: "text",
      value: cameraBack,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-camera-front",
      placeholder: "Camera Front",
      icon: "tag",
      name: "cameraFront",
      type: "text",
      value: cameraFront,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-batery",
      placeholder: "Batery",
      icon: "tag",
      name: "batery",
      type: "text",
      value: batery,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-storage",
      placeholder: "Storage",
      icon: "tag",
      name: "storage",
      type: "text",
      value: storage,
      onChange: handleLoginInputChange,
    },
    {
      id: "input-color",
      placeholder: "Color",
      icon: "tag",
      name: "color",
      type: "text",
      value: color,
      onChange: handleLoginInputChange,
    },
  ]

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    manufacturer: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    color: Yup.string().required("Required"),
    imageFileName: Yup.string().required("Required"),
    screen: Yup.string().required("Required"),
    processor: Yup.string().required("Required"),
    ram: Yup.string().required("Required"),
    cameraBack: Yup.string().required("Required"),
    cameraFront: Yup.string().required("Required"),
    batery: Yup.string().required("Required"),
    storage: Yup.string().required("Required"),
  })

  const onHandleSubmit = () => {
    dispatch(createPhone(formLoginValues))
  }

  return (
    <>
      <Modal.Header>Create New phone</Modal.Header>
      <Modal.Content>
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
          <Form size="large">
            {map(configForm, (el, index) => (
              <FactoryField key={index} {...el} />
            ))}
            <Segment>
              <UploadImage />
            </Segment>
            <div className="button">
              <Button negative onClick={() => dispatch(uiCloseModal())}>
                Cancel
              </Button>
              <SubmitButton positive secondary onClick={onHandleSubmit}>
                Create
              </SubmitButton>
            </div>
          </Form>
        </Formik>
      </Modal.Content>
    </>
  )
}

export default AddPhoneModal
