import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function LocationModal({ show, toggleModal, item }: any) {
  const [state, setState] = useState({ ...item });
  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <Modal show={show} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit loaction detail </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="ControlInput1">
            <Form.Label>Location name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location name"
              name="name"
              value={state?.name || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlTextarea1">
            <Form.Label>Location description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="description"
              onChange={handleChange}
              value={state?.description || ""}
              placeholder="Enter location description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlInput2">
            <Form.Label>Location npi</Form.Label>
            <Form.Control
              type="text"
              name="npi"
              onChange={handleChange}
              value={state?.npi || ""}
              placeholder="Enter location npi"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlInput3">
            <Form.Label>Location alias</Form.Label>
            <Form.Control
              type="text"
              name="alias"
              onChange={handleChange}
              value={state?.alias || ""}
              placeholder="Enter location alias"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlInput4">
            <Form.Label>Location taxId</Form.Label>
            <Form.Control
              type="text"
              name="taxId"
              onChange={handleChange}
              value={state?.taxId || ""}
              placeholder="Enter location taxId"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlInput4">
            <Form.Label>Location type</Form.Label>
            <Form.Control
              type="text"
              name="type"
              onChange={handleChange}
              value={state?.type || ""}
              placeholder="Enter location type"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Select1">
            <Form.Label>Location status</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={state?.status}
              name="status"
              onChange={handleChange}
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
        <Button variant="primary" onClick={toggleModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LocationModal;
