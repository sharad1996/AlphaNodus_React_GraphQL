import { useEffect } from "react";
import LocationCard from "./LocationCard";
import { GET_LOCATION_BY_ID } from "../Apollo/Queries";
import { useMutation, useQuery } from "@apollo/client";
import { AiFillDelete } from "react-icons/ai";
import { REMOVE_LOCATION } from "../Apollo/Mutation";

function LocationDetails({ id }: { id?: string }) {
  const { loading, error, data } = useQuery(GET_LOCATION_BY_ID, {
    variables: {
      locationId: id || "37d9bba7-962b-48dd-bcfe-843819406d27",
      tenant: "940e8edf-edd9-401d-a21a-10f866fbdb3f",
    },
  });
  const [removeLocation, { data: deleting }] = useMutation(REMOVE_LOCATION, {
    variables: {
      locationRemoveId: data?.locationRead?.id,
      tenant: "940e8edf-edd9-401d-a21a-10f866fbdb3f",
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log("=========== data 121 1===========", data);
  const deleteLocation = () => {
    removeLocation()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div>
        delete location <AiFillDelete onClick={deleteLocation} />{" "}
      </div>
      <div>Location Container Details page</div>
      <LocationCard />
    </>
  );
}

export default LocationDetails;
