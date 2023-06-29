import { Pagination } from "react-bootstrap";
import LocationCard from "./LocationCard";
import { useState } from "react";

function LocationList({ data, setSelectedCardId, pages }: any) {
  const [active, setActive] = useState(1);
  const items = [];

  const handleClick = (e: any, i: any) => {
    setActive(i);
  };

  for (let i = 1; i <= Math.floor(pages / 10); i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === active}
        onClick={(e) => handleClick(e, i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <div>
      {data?.length ? (
        <>
          {data.map((item: any) => (
            <div key={item?.id}>
              <LocationCard item={item} setSelectedCardId={setSelectedCardId} />
            </div>
          ))}
          <Pagination>{items}</Pagination>
        </>
      ) : (
        <h3>No location found</h3>
      )}
    </div>
  );
}

export default LocationList;
