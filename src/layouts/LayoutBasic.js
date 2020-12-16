import React from "react";
import { Container } from "semantic-ui-react";
import AddNewPhoneButton from "../components/AddNewPhoneButton";
import SnackbarProvider from 'react-simple-snackbar'
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function LayoutBasic(props) {

  const { children } = props;

  return (
    <>
      <SnackbarProvider>
        <Header />
        <Container className="layout-basic">{children}</Container>
        <AddNewPhoneButton />
        <Modal />
      </SnackbarProvider>
    </>
  );
}