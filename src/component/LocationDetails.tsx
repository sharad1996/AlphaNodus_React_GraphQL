import LocationCard from "./LocationCard";
import { GET_LOCATION_BY_ID } from "../Apollo/Queries";
import { useLazyQuery, useMutation } from "@apollo/client";
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
    setLocationDeleted(false);
  }, [id]);

  const [removeLocation] = useMutation(REMOVE_LOCATION, {
    variables: {
      locationRemoveId: data?.locationRead?.id,
      tenant: "940e8edf-edd9-401d-a21a-10f866fbdb3f",
    },
  });

  if (error) return `Error! ${error}`;
  const deleteLocation = (e: any) => {
    e.stopPropagation();
    removeLocation()
      .then(() => {
        setLocationDeleted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onHandleGetLocation = (e: any) => {
    e.stopPropagation();
    getLocation();
  };

  return (
    <>
      {locationDeleted && (
        <div className="location-delete">
          You've deleted this location, please select another item
        </div>
      )}
      {!locationDeleted && (
        <>
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <LocationCard
              editable
              item={data?.locationRead?.resource}
              showDeleteIcon
              deleteLocation={deleteLocation}
              getLocation={onHandleGetLocation}
            />
          )}
        </>
      )}
    </>
  );
}

export default LocationDetails;
