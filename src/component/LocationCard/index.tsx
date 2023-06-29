import Card from "react-bootstrap/Card";

function LocationCard({ item }: any) {
  return (
    <Card style={{ marginBottom: "20px" }} className="mt-3">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;
