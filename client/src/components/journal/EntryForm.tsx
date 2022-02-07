import React from "react";
import { Button, Card, Form } from "../../styles/styles";

const EntryForm: React.FC = () => {
  return (
    <Card>
      <h2>New Journal Entry</h2>
      <hr />
      <Form>
        <input id='text' type='text' placeholder="Subject" />
        <textarea id='body' placeholder="New message."/>
        <Button></Button>
      </Form>
    </Card>
  )
}

export default EntryForm;