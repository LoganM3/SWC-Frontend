import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import '../styles/CrewPage.css'



export function AddVideo({setVideoList}) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [url, setUrl] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function formSubmit(e) {
    e.preventDefault();
    form.url=url
    const addVideo = await fetch("https://swc-api-aa731.web.app/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    .catch((err) => console.error(err))
    setVideoList(await addVideo.json())  //fix this line******
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
        setUrl(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Video
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formSubmit}>
            <input type="video" placeholder="import youtube url" onChange={(e) => convertFile(e.target.files)} />
            <hr />
            {url && <video src={url} width={300}/>}



            {/* <Form.Group className="mb-3" controlId="">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="add name"
                // value={form.name}
                onChange={updateForm}
              />
            </Form.Group> */}
         
            {/* <Form.Group className="mb-3" controlId="">
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                type="link"
                name="Instagram"
                placeholder="Instagram link"
                onChange={updateForm}
              />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control 
              as="textarea" 
              name="description"
              placeholder="add description" 
              onChange={updateForm}
              />
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