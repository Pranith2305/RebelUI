// FormTest.jsx
import React from "react";
import { Form, Heading, SubHeading, InputBox, Button, BottomWarning } from "../components/Form";

export default function FormTest() {
  return (
    <Form>
      <Heading label="Sign Up" />
      <SubHeading label="Create your account" />
      <InputBox label="Username" placeholder="Enter your username" />
      <InputBox label="Email" placeholder="Enter your email" />
      <InputBox label="Password" placeholder="Enter your password" />
      <Button label="Sign Up" onClick={() => alert('Signed Up!')} />
      <BottomWarning
        label="Already have an account?"
        buttonText="Log In"
        to="/login"
      />
    </Form>
  );
}