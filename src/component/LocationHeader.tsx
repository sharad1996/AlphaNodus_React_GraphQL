import { useState } from "react";
import "./LocationHeader.css";
import LocationModal from "./LocationModal";

export default function LocationHeader({
  setFilterName,
  filterName,
  refresh,
  filterWithStatus,
}: any) {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
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
        <button
          className="FilterLocationButton"
          onClick={() => filterWithStatus("active")}
        >
          Filter status active
        </button>
        <button
          className="FilterLocationButton"
          onClick={() => filterWithStatus("inactive")}
        >
          Filter status inactive
        </button>
        <button className="FilterLocationButton">Filter 3</button>
        <button className="FilterLocationButton">Filter 4</button>
      </div>
      <LocationModal toggleModal={toggleModal} show={show} addNewLocation />
    </div>
  );
}
