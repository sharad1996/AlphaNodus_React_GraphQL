import { useQuery } from "@apollo/client";
import LocationHeader from "./LocationHeader";
import LocationList from "./LocationList";
import { GET_LOCATIONS } from "../Apollo/Queries";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

function LocationContainer({ setSelectedCardId }: any) {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  const [state, setState] = useState<any>({
    loading: false,
    data: [],
  });
  const [filterName, setFilterName] = useState("");

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

  // const HandleReferesh = () => {
  //   const { loading, data } = useQuery(GET_LOCATIONS);
  //   setState({
  //     loading: loading,
  //     data: data?.locationList?.resources || [],
  //   });
  // };

  useEffect(() => {
    setState({
      loading: loading,
      data: data?.locationList?.resources || [],
    });
  }, [loading, error, data]);

  return (
    <div style={{ textAlign: "center" }}>
      <LocationHeader setFilterName={setFilterName} filterName={filterName} />
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <LocationList
          data={state?.data}
          setSelectedCardId={setSelectedCardId}
        />
      )}
    </div>
  );
}

export default LocationContainer;
