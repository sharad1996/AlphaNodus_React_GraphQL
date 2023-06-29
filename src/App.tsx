import { useQuery } from "@apollo/client";
import "./App.css";
import LocationContainer from "./component/LocationContainer";
import { GET_LOCATIONS } from "./Apollo/Queries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocationDetails from "./component/LocationDetails";

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log("============ data  1===========", data);
  return (
    <Container className="App">
      <Row>
        <Col md={6}>
          <LocationContainer />
        </Col>
        <Col md={6}>
          <LocationDetails />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
