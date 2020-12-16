import React from "react";
import { Container } from "semantic-ui-react";
import AddNewPhoneButton from "../components/AddNewPhoneButton";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function LayoutBasic(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <Container className="layout-basic">{children}</Container>
      <AddNewPhoneButton />
      <Modal />
    </>
  );
}