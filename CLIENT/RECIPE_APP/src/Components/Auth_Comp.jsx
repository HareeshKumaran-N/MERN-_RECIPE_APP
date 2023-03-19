import React from "react";

import { Tab, Tabs, Container } from "react-bootstrap";
import FormComponent from "./FormComponent";

function Auth_Comp() {
  return (
    <Tabs
      defaultActiveKey="login"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Tab eventKey="login" title="Login">
        <FormComponent isRegistering={false} />
      </Tab>
      <Tab eventKey="register" title="Register">
        <FormComponent isRegistering={true} />
      </Tab>
    </Tabs>
  );
}

export default Auth_Comp;
