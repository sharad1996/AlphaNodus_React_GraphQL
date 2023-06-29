import { Pagination } from "react-bootstrap";
import LocationCard from "./LocationCard";
interface IProps {
  data: any;
  setSelectedCardId: (id: string) => void;
  pages: number;
  setPage: (page: number) => void;
  page: number;
}

function LocationList({
  data,
  setSelectedCardId,
  pages,
  setPage,
  page,
}: IProps) {
  const items = [];

  const handleClick = (e: any, page: number) => {
    setPage(page);
  };

  for (let i = 1; i <= Math.floor(pages / 10); i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === page}
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
