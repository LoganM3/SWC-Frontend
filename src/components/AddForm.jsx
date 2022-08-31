import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ImageUpload } from "./FileUpload";
import { async } from "@firebase/util";

export function AddFrom() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [profilePic, setProfilePic] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function formSubmit(e) {
    e.preventDefault();
    form.profilePic=profilePic
    const addCrew = await fetch("http://localhost:5050/crew", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch((err) => console.error(err));
    handleClose()
  }

  const updateForm = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  function convertFile(files) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev) => {
        // convert it to base64
        setProfilePic(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Member
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formSubmit}>
            <input type="file" onChange={(e) => convertFile(e.target.files)} />
            <hr />
            {profilePic && <img src={profilePic} width={300} />}

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="add name"
                // value={form.name}
                onChange={updateForm}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" placeholder="add description" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={formSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
