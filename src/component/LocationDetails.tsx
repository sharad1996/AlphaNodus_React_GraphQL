import { useEffect } from "react";
import LocationCard from "./LocationCard";
import { GET_LOCATION_BY_ID } from "../Apollo/Queries";
import { useQuery } from "@apollo/client";

function LocationDetails({ id }: { id?: string }) {
  const { loading, error, data } = useQuery(GET_LOCATION_BY_ID, {
    variables: {
      locationId: id || "37d9bba7-962b-48dd-bcfe-843819406d27",
      tenant: "940e8edf-edd9-401d-a21a-10f866fbdb3f",
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log("=========== data 121 ===========", data);
  return (
    <>
      <div>Location Container Details page</div>
      <LocationCard />
    </>
  );
}

export default LocationDetails;
