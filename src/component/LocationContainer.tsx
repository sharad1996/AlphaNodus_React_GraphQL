import { useQuery } from "@apollo/client";
import LocationHeader from "./LocationHeader";
import LocationList from "./LocationList";
import { GET_LOCATIONS } from "../Apollo/Queries";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

function LocationContainer() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  const [state, setState] = useState({
    loading: false,
    data: [],
  });

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
    <div>
      <LocationHeader />
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <LocationList data={state?.data} />
      )}
    </div>
  );
}

export default LocationContainer;
