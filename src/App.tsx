import { useQuery } from "@apollo/client";
import "./App.css";
import LocationContainer from "./component/LocationContainer";
import { GET_LOCATIONS } from "./Apollo/Queries";

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log("============ data  1===========", data);
  return (
    <div className="App">
      <LocationContainer />
    </div>
  );
}

export default App;
