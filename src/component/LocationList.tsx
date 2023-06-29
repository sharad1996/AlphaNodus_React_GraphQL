import LocationCard from "./LocationCard";

function LocationList({ data }: any) {
  return (
    <div>
      {data.map((item: any) => (
        <div key={item?.id}>
          <LocationCard item={item} />
        </div>
      ))}
    </div>
  );
}

export default LocationList;
