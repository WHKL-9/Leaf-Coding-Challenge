import { FaListAlt } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import ReceiptInput from "./ReceiptInput";

const ProcessReceiptSect = () => {
  return (
    <Container className="ReceiptContainer my-3">
      <Row className="d-flex justify-content-center">
        <Col xs={9} lg={6}>
          <div className="ReceiptLogo d-flex justify-content-center align-items-center mt-2 mx-auto">
            <FaListAlt />
          </div>
          <div className="text-center">
              Process Receipt
          </div>
        </Col>
      </Row>

      <hr/>

      <Row className="d-flex justify-content-center">
        <Col xs={8} sm={6}>
            <ReceiptInput/>
          </Col>
      </Row>
    </Container>
  );
};

export default ProcessReceiptSect;
