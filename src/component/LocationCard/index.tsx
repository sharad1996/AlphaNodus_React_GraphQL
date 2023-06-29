import Card from "react-bootstrap/Card";
import Pill from "../Pill";
import LocationModal from "../LocationModal";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_LOCATION } from "../../Apollo/Mutation";

function LocationCard({ item, setSelectedCardId, editable }: any) {
  const [show, setShow] = useState(false);
  const hours = Math.floor(
    (new Date().getTime() - item?.updatedAt) / (1000 * 60 * 60)
  );
  const [updateExitsLocation] = useMutation(UPDATE_LOCATION);

  const toggleModal = () => {
    setShow(!show);
  };

  const updateLocation = (values: any) => {
    console.log("========= values ==========", values);
    delete values.__typename;
    if (values?.telecom.length) {
      values?.telecom.map((tele: any) => {
        delete tele.__typename;
      });
    }
    updateExitsLocation({
      variables: {
        tenant: "940e8edf-edd9-401d-a21a-10f866fbdb3f",
        locationUpdateId: item.id,
        requestBody: { ...values },
      },
    }).then(() => {
      toggleModal();
    });
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
      <LocationModal
        toggleModal={toggleModal}
        show={show}
        item={item}
        onHandleSubmit={updateLocation}
      />
    </>
  );
}

export default LocationCard;
