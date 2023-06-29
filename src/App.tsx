import LocationContainer from "./component/LocationContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocationDetails from "./component/LocationDetails";
import { useState } from "react";

function App() {
  // const { loading, error, data } = useQuery(GET_LOCATIONS);
  const [selectedCardId, setSelectedCardId] = useState<string>("");

  return (
    <Container className="App">
      <Row>
        <Col md={6}>
          <LocationContainer setSelectedCardId={setSelectedCardId} />
        </Col>
        <Col md={6}>
          {/* @ts-ignore */}
          {selectedCardId && <LocationDetails id={selectedCardId} />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
