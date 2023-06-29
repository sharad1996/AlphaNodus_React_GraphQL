import Card from "react-bootstrap/Card";
import Pill from "../Pill";
import LocationModal from "../LocationModal";
import { useState } from "react";

function LocationCard({ item, setSelectedCardId, editable }: any) {
  const [show, setShow] = useState(false);
  const hours = Math.floor(
    (new Date().getTime() - item?.updatedAt) / (1000 * 60 * 60)
  );
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Card
        style={{ marginBottom: "20px", cursor: "pointer" }}
        className="mt-3"
        onClick={() => (editable ? toggleModal() : setSelectedCardId(item?.id))}
      >
        <Card.Body>
          <Card.Title>
            <div className="d-flex justify-content-between">
              <span>{item?.name}</span>
              <span className="header-pill">
                <Pill
                  title={item?.status === "active" ? "Active" : "InActive"}
                />
              </span>
            </div>
          </Card.Title>
          <Card.Text style={{ textAlign: "left" }}>
            <div>
              <span>{item?.address}</span>
              <div className="d-flex justify-content-between">
                Some quick example text
                <div>{hours || 0}h</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <LocationModal toggleModal={toggleModal} show={show} item={item} />
    </>
  );
}

export default LocationCard;
