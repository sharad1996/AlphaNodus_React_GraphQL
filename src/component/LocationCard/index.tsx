import Card from "react-bootstrap/Card";
import Pill from "../Pill";

function LocationCard({ item }: any) {
  return (
    <Card style={{ marginBottom: "20px" }} className="mt-3">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <div>
            <div className="header-container d-flex justify-content-between">
              <span className="header-text">Header</span>
              <span className="header-pill">
                <Pill title="Active" />
              </span>
            </div>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;
