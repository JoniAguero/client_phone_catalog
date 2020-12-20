import React, { useState, useCallback, useContext } from "react"
import { Icon, Dimmer, Loader, Image } from "semantic-ui-react"
import { useDropzone } from "react-dropzone"
import "./UploadImage.css"
import FileUploadContext from "../../contexts/FileUploadContext";

export default function UploadImage(props) {

  const { setFile } = useContext(FileUploadContext);
  const [fileUpload, setFileUpload] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const onDrop = useCallback((acceptedFile) => {
    setIsLoading(true)
    const file = acceptedFile[0]
    setFileUpload({
      type: "image",
      file,
      preview: URL.createObjectURL(file),
    })
    setFile(file)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  })

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  })

  return (
    <>
      <div
        {...getRootProps()}
        className="dropzone"
        style={fileUpload && { border: 0 }}
      >
        {!fileUpload && (
          <div className="container-image-upload">
            <Icon name="cloud upload" />
            <p>Drag the image</p>
          </div>
        )}
        <input {...getInputProps()} />
      </div>

      {fileUpload?.type === "image" && (
        <div {...getRootProps()} className="dropzone">
          <div className="container-image-uploaded">
            <Image src={`${fileUpload.preview}`} centered size="medium" />
          </div>
        </div>
      )}

      {isLoading && (
        <Dimmer active className="uploading">
          <Loader />
        </Dimmer>
      )}
    </>
  )
}
