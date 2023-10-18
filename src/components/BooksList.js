import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import DetailDataService from "../services/book.services";

const DetailsList = ({ getDetailId }) => {
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const data = await DetailDataService.getAllDetails();
    console.log(data.docs);
    setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await DetailDataService.deleteDetail(id);
    getDetails();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getDetails}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Details.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.Name}</td>
                <td>{doc.Age}</td>
                <td>{doc.Gender}</td>
                <td>{doc.Email}</td>
                <td>{doc.City}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getDetailId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default DetailsList;
