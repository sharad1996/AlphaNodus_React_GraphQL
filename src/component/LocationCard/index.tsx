import Card from "react-bootstrap/Card";
import Pill from "../Pill";

function LocationCard({ item, setSelectedCardId }: any) {
  const hours = Math.floor(
    (new Date().getTime() - item?.updatedAt) / (1000 * 60 * 60)
  );

  return (
    <Card
      style={{ marginBottom: "20px", cursor: "pointer" }}
      className="mt-3"
      onClick={() => setSelectedCardId(item?.id)}
    >
      <Card.Body>
        <Card.Title>
          <div className="d-flex justify-content-between">
            <span>{item?.name}</span>
            <span className="header-pill">
              <Pill title={item?.status === "active" ? "Active" : "InActive"} />
            </span>
          </div>
        </Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          <div>
            <span>{item?.address}</span>
            <div className="d-flex justify-content-between">
              Some quick example text
              <div>{hours || 0}h</div>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;
