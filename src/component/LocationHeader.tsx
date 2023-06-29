import { useState } from "react";
import "./LocationHeader.css";
import LocationModal from "./LocationModal";
import { useMutation } from "@apollo/client";
import { CREATE_LOCATION } from "../Apollo/Mutation";

export default function LocationHeader({
  setFilterName,
  filterName,
  refresh,
}: any) {
  const [show, setShow] = useState(false);

  const [createLocation] = useMutation(CREATE_LOCATION);

  const toggleModal = () => {
    setShow(!show);
  };

  const createNewLocation = (values: any) => {
    createLocation({
      variables: {
        tenant: "940e8edf-edd9-401d-a21a-10f866fbdb3f",
        requestBody: { ...values },
      },
    }).then(() => {
      toggleModal();
    });
  };

  return (
    <div className="LocationHeaderContainer">
      <div className="RowContainer">
        <button className="RefereshLocationButton" onClick={refresh}>
          Referesh
        </button>
        <span>Locations</span>
        <button className="AddLocationButton" onClick={toggleModal}>
          +
        </button>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search..."
          className="SearchInput"
          onChange={(e) => setFilterName(e.target.value)}
          value={filterName}
        />
      </div>
      <div className="RowContainer">
        <button className="FilterLocationButton">Filter 1</button>
        <button className="FilterLocationButton">Filter 2</button>
        <button className="FilterLocationButton">Filter 3</button>
        <button className="FilterLocationButton">Filter 4</button>
      </div>
      <LocationModal
        toggleModal={toggleModal}
        show={show}
        addNewLocation
        onHandleSubmit={createNewLocation}
      />
    </div>
  );
}
