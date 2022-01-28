import React from "react";

import { Card, Form } from "../styles/styles";

const AuthCard:React.FC = () => {
  return (
    <Card>
      <Form>
        <label>Username</label>
        <input id="username" name="username" placeholder="Username"/>

      </Form>
    </Card>
  )
}

export default AuthCard;