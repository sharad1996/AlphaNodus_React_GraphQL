import LocationCard from "./LocationCard";
import { GET_LOCATION_BY_ID } from "../Apollo/Queries";
import { useLazyQuery, useMutation } from "@apollo/client";
import { AiFillDelete } from "react-icons/ai";
import { REMOVE_LOCATION } from "../Apollo/Mutation";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

function LocationDetails({ id }: { id?: string }) {
  const [locationDeleted, setLocationDeleted] = useState(false);
  const [getLocation, { loading, error, data }] = useLazyQuery(
    GET_LOCATION_BY_ID,
    {
      fetchPolicy: "network-only",
      variables: {
        locationId: id || "37d9bba7-962b-48dd-bcfe-843819406d27",
        tenant: "940e8edf-edd9-401d-a21a-10f866fbdb3f",
      },
    }
  );

  useEffect(() => {
    getLocation();
  }, []);

  const [removeLocation] = useMutation(REMOVE_LOCATION, {
    variables: {
      locationRemoveId: data?.locationRead?.id,
      tenant: "940e8edf-edd9-401d-a21a-10f866fbdb3f",
    },
  });

  if (error) return `Error! ${error}`;
  const deleteLocation = () => {
    removeLocation()
      .then(() => {
        setLocationDeleted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {locationDeleted && (
        <div>You've deleted this location, please select another item</div>
      )}
      {!locationDeleted && (
        <>
          <div>
            delete location <AiFillDelete onClick={deleteLocation} />{" "}
          </div>
          <div>Location Container Details page</div>
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <LocationCard editable item={data?.locationRead?.resource} />
          )}
        </>
      )}
    </>
  );
}

export default LocationDetails;
