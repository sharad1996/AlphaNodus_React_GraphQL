import LocationCard from "./LocationCard";

function LocationList({ data, setSelectedCardId }: any) {
  return (
    <div>
      {data.map((item: any) => (
        <div key={item?.id}>
          <LocationCard item={item} setSelectedCardId={setSelectedCardId} />
        </div>
      ))}
    </div>
  );
}

export default LocationList;
