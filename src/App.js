import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddDetail from "./components/AddBook";
import DetailsList from "./components/BooksList";
import "./App.css";

function App() {
  const [DetailId, setDetailId] = useState("");

  const getDetailIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setDetailId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddDetail id={DetailId} setDetailId={setDetailId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <DetailsList getDetailId={getDetailIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
