import LocationCard from "./LocationCard";

const locationList = ["location1", "location2"];

function LocationList() {
  return (
    <div>
      {locationList.map((item) => (
        <LocationCard item={item} />
      ))}
    </div>
  );
}

export default LocationList;
