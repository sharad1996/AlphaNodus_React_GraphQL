import LocationContainer from "./component/LocationContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocationDetails from "./component/LocationDetails";

function App() {
  // const { loading, error, data } = useQuery(GET_LOCATIONS);
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
