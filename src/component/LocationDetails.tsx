import LocationCard from "./LocationCard";
import { GET_LOCATION_BY_ID } from "../Apollo/Queries";
<<<<<<< HEAD
import { useMutation, useQuery } from "@apollo/client";
import { AiFillDelete } from "react-icons/ai";
import { REMOVE_LOCATION } from "../Apollo/Mutation";
=======
import { useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";
>>>>>>> 1ce03d995960616af0a6cb497374d85df90894cc

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

  if (error) return `Error! ${error}`;
<<<<<<< HEAD
  console.log("=========== data 121 1===========", data);
  const deleteLocation = () => {
    removeLocation()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
=======
>>>>>>> 1ce03d995960616af0a6cb497374d85df90894cc
  return (
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
  );
}

export default LocationDetails;
