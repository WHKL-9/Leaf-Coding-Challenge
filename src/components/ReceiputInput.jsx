import { Form, Button } from "react-bootstrap";
import "../App.css";

const ReceiptInput = () => {
  return (
    <Form>
      <Form.Group controlId="formFile" className="mb-2">
        <Form.Control type="file" className="UploadFile" />
      </Form.Group>

      <div className="text-center">
          <Button className="AnalyseReceiptBtn mb-2" size="lg">
            Analyse Receipt
          </Button>
      </div>
    </Form>
  );
};

export default ReceiptInput;
