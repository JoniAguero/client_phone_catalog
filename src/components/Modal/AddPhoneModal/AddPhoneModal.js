import React, { useState } from "react"
import { map } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { Button, Modal, Segment } from "semantic-ui-react"
import { useFormHook } from "../../../hooks/useForm"
import { Formik } from "formik"
import * as Yup from "yup"
import { Form, SubmitButton } from "formik-semantic-ui-react"
import "./AddPhoneModal.css"
import FactoryField from "../../utils/FactoryField"
import { uiCloseModal } from "../../../redux/actions/uiActions"
import UploadImage from "../../UploadImage"
import { createPhone, editPhone } from "../../../redux/actions/phonesActions"
import FileUploadContext from "../../../contexts/FileUploadContext"

const AddPhoneModal = () => {

  const dispatch = useDispatch()
  const { ui, phones } = useSelector((state) => state)
  const phoneSelected = phones.phoneSelected
  const [file, setFile] = useState(null);

  const [formValues, handleInputChange] = useFormHook({
    name: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.name,
    price: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.price,
    manufacturer: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.manufacturer,
    description: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.description,
    color: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.color,
    imageFileName: ui.modal.typeModal === 'addPhone'
      ? '' : phoneSelected.imageFileName,
    screen: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.screen,
    processor: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.processor,
    ram: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.ram,
    cameraBack: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.cameraBack,
    cameraFront: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.cameraFront,
    batery: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.batery,
    storage: ui.modal.typeModal === 'addPhone' ? '' : phoneSelected.storage
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
  } = formValues

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
      value: name,
      onChange: handleInputChange,
    },
    {
      id: "input-manufacturer",
      placeholder: "Manufacturer",
      icon: "tag",
      name: "manufacturer",
      type: "text",
      value: manufacturer,
      onChange: handleInputChange,
    },
    {
      id: "input-price",
      placeholder: "Price",
      icon: "tag",
      name: "price",
      type: "number",
      value: price,
      onChange: handleInputChange,
    },
    {
      id: "input-description",
      placeholder: "Description",
      icon: "tag",
      name: "description",
      type: "textarea",
      value: description,
      onChange: handleInputChange,
    },
    {
      id: "input-screen",
      placeholder: "Screen",
      icon: "tag",
      name: "screen",
      type: "text",
      value: screen,
      onChange: handleInputChange,
    },
    {
      id: "input-processor",
      placeholder: "Processor",
      icon: "tag",
      name: "processor",
      type: "text",
      value: processor,
      onChange: handleInputChange,
    },
    {
      id: "input-ram",
      placeholder: "RAM",
      icon: "tag",
      name: "ram",
      type: "text",
      value: ram,
      onChange: handleInputChange,
    },
    {
      id: "input-camera-back",
      placeholder: "Camera Back",
      icon: "tag",
      name: "cameraBack",
      type: "text",
      value: cameraBack,
      onChange: handleInputChange,
    },
    {
      id: "input-camera-front",
      placeholder: "Camera Front",
      icon: "tag",
      name: "cameraFront",
      type: "text",
      value: cameraFront,
      onChange: handleInputChange,
    },
    {
      id: "input-batery",
      placeholder: "Batery",
      icon: "tag",
      name: "batery",
      type: "text",
      value: batery,
      onChange: handleInputChange,
    },
    {
      id: "input-storage",
      placeholder: "Storage",
      icon: "tag",
      name: "storage",
      type: "text",
      value: storage,
      onChange: handleInputChange,
    },
    {
      id: "input-color",
      placeholder: "Color",
      icon: "tag",
      name: "color",
      type: "text",
      value: color,
      onChange: handleInputChange,
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
    if (ui.modal.typeModal === "addPhone") {
      if(file) {
        if(file) {
          const formData = new FormData();
          formData.append('file', file);
          dispatch(createPhone(formValues, formData));
        } else {
          dispatch(createPhone(formValues, null))
        }
      }
    } else {
      if(file) {
        const formData = new FormData();
        formData.append('file', file);
        dispatch(editPhone(phoneSelected._id, formValues, formData));
      } else {
        dispatch(editPhone(phoneSelected._id, formValues, null))
      }
    }
  }

  return (
    <>
      <Modal.Header>
        {ui.modal.typeModal === "addPhone"
          ? "Create New phone"
          : `Edit Phone: ${phoneSelected.name}`}
      </Modal.Header>
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
              <FileUploadContext.Provider value={{ file, setFile }}>
                <UploadImage />
              </FileUploadContext.Provider>
            </Segment>
            <div className="button">
              <Button negative onClick={() => dispatch(uiCloseModal())}>
                Cancel
              </Button>
              <SubmitButton positive secondary onClick={onHandleSubmit}>
                {ui.modal.typeModal === "addPhone" ? "Create" : `Edit`}
              </SubmitButton>
            </div>
          </Form>
        </Formik>
      </Modal.Content>
    </>
  )
}

export default AddPhoneModal
