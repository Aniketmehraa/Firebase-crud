import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button } from "react-bootstrap";
import DetailDataService from "../services/book.services";

const AddDetail = ({ id, setDetailId }) => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [Email, setEmail] = useState("");
  const [City, setCity] = useState("");
  // const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      Name === "" ||
      Age === "" ||
      Gender === "" ||
      Email === "" ||
      City === ""
    ) {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newDetail = {
      Name,
      Age,
      Gender,
      Email,
      City,
    };
    console.log(newDetail);

    try {
      if (id !== undefined && id !== "") {
        await DetailDataService.updateDetail(id, newDetail);
        setDetailId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await DetailDataService.addDetails(newDetail);
        setMessage({ error: false, msg: "New detail added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setAge("");
    setGender("");
    setEmail("");
    setCity("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await DetailDataService.getDetail(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().Name);
      setAge(docSnap.data().Age);
      setGender(docSnap.data().Gender);
      setEmail(docSnap.data().Email);
      setCity(docSnap.data().City);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formDetailName">
            <InputGroup>
              <InputGroup.Text id="formDetailName">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDetailAge">
            <InputGroup>
              <InputGroup.Text id="formDetailAge">B</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Age"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDetailGender">
            <InputGroup>
              <InputGroup.Text id="formDetailGender">C</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Gender"
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDetailEmail">
            <InputGroup>
              <InputGroup.Text id="formDetailEmail">D</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDetailCity">
            <InputGroup>
              <InputGroup.Text id="formDetailCity">E</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="City"
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          {/* <ButtonGroup aria-label="Basic example" className="mb-3"> */}
          {/* <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                // setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                // setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button> */}
          {/* </ButtonGroup> */}
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddDetail;
