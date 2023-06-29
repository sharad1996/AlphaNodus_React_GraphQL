import { useLazyQuery } from "@apollo/client";
import LocationHeader from "./LocationHeader";
import LocationList from "./LocationList";
import { GET_LOCATIONS } from "../Apollo/Queries";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

interface IProps {
  setSelectedCardId: (value: string) => void;
}
function LocationContainer({ setSelectedCardId }: IProps) {
  const [page, setPage] = useState(1);

  const [getLocation, { loading, error, data }] = useLazyQuery(GET_LOCATIONS, {
    fetchPolicy: "network-only",
  });

  const [state, setState] = useState<any>({
    loading: false,
    data: [],
  });
  const [filterName, setFilterName] = useState("");

  const filterWithStatus = (status: any) => {
    const arr = [...(data?.locationList?.resources || [])];
    const filteredLocation = arr.filter(
      (item: any) => item?.status.toLowerCase() === status
    );
    setState({
      ...state,
      data: filteredLocation,
    });
  };

  useEffect(() => {
    const arr = [...(data?.locationList?.resources || [])];
    const filteredLocation = arr.filter((item: any) =>
      item?.name.toLowerCase().includes(filterName.toLowerCase())
    );
    setState({
      ...state,
      data: filteredLocation,
    });
  }, [filterName]);

  useEffect(() => {
    setState({
      loading: loading,
      data: data?.locationList?.resources || [],
      pages: data?.locationList?.pages,
    });
  }, [loading, error, data]);

  useEffect(() => {
    getLocation({
      variables: {
        page: page,
      },
    });
  }, [page]);

  return (
    <div style={{ textAlign: "center" }}>
      <LocationHeader
        setFilterName={setFilterName}
        filterName={filterName}
        refresh={getLocation}
        filterWithStatus={filterWithStatus}
      />
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <LocationList
          data={state?.data}
          setSelectedCardId={setSelectedCardId}
          pages={state?.pages}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default LocationContainer;
