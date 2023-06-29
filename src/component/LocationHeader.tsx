import "./LocationHeader.css";

export default function LocationHeader({ setFilterName, filterName }: any) {
  return (
    <div className="LocationHeaderContainer">
      <div className="RowContainer">
        <button className="RefereshLocationButton">Referesh</button>
        <span>Locations</span>
        <button className="AddLocationButton">+</button>
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
    </div>
  );
}
