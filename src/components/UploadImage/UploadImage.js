import React, { useState, useCallback } from "react";
import { Icon, Button, Dimmer, Loader, Image } from "semantic-ui-react";
import { useSnackbar } from "react-simple-snackbar";
import { useDropzone } from "react-dropzone";
import "./UploadImage.css";

export default function UploadImage() {

  const [fileUpload, setFileUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openSnackbar] = useSnackbar()

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setFileUpload({
      type: "image",
      file,
      preview: URL.createObjectURL(file),
    });
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  const onClose = () => {
    setIsLoading(false);
    setFileUpload(null);
  };

  const onPublish = async () => {
    try {
      setIsLoading(true);
      // const result = await publish({
      //   variables: {
      //     file: fileUpload.file,
      //   },
      // });
      // const { data } = result;

      if (true) {
        openSnackbar('Error. Something has happened :(')
        isLoading(false);
      } else {
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <Image src={`${fileUpload.preview}`} centered size='medium'/>
      )}

      {fileUpload && (
        <Button className="btn-upload btn-action" onClick={onPublish}>
          Publicar
        </Button>
      )}

      {isLoading && (
        <Dimmer active className="publishing">
          <Loader />
          <p>Publicando...</p>
        </Dimmer>
      )}
    </>
  );
}