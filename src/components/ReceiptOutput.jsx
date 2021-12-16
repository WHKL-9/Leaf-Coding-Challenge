import { Row, Col } from "react-bootstrap";
import "../App.css"

const ReceiptOutput = ({ responses }) => {
  return (
    <div>
      {responses.blocks.map((response, index) => (
        <Row className="d-flex flex-row blockOutput my-2" key={index}>
          <Col xs={12}>begin_col: {response.begin_col}</Col>
          <Col xs={12}>begin_row: {response.begin_row}</Col>
          <Col xs={12}>end_col: {response.end_col}</Col>
          <Col xs={12}>end_row: {response.end_row}</Col>
        </Row>
      ))}
    </div>
  );
};
export default ReceiptOutput;


