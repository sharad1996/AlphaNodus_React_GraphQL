import "./LocationHeader.css";

export default function LocationHeader() {
  return (
    <div className="LocationHeaderContainer">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="RefereshLocationButton">Referesh</button>
        <span>Locations</span>
        <button className="AddLocationButton">+</button>
      </div>
      <div>
        <input type="search" placeholder="Search..." className="SearchInput" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="FilterLocationButton">Filter 1</button>
        <button className="FilterLocationButton">Filter 2</button>
        <button className="FilterLocationButton">Filter 3</button>
        <button className="FilterLocationButton">Filter 4</button>
      </div>
    </div>
  );
}
