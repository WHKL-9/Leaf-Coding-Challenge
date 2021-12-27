import { Form, Button } from "react-bootstrap";
import "../App.css";
import { useState, useEffect } from "react";
import ReceiptOutput from "./ReceiptOutput";
import { acceptFile, sendFile} from "../utilities/function";

const ReceiptInput = () => {
  const [fileInput, setFileInput] = useState();
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, showOutput] = useState(false);

  useEffect(() => {
    if (fileInput) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsText(fileInput);
    } else {
    }
  }, [fileInput]);
  return (
    <Form>
      <Form.Group controlId="formFile" className="mb-2">
        <Form.Control
          type="file"
          className="UploadFile"
          // but we still can't fully prevent user from uploading non txt file 
          accept=".txt"
          name="textFile"
          onChange={(event) => {
            acceptFile(event, setFileInput, showOutput)
          }}
        />
        {fileInput != null ? (
          <section>
            <div>{preview}</div>
            <div className="mx-auto">
              <Button
                className="AnalyseReceiptBtn"
                size="lg"
                onClick={(event) => {
                  event.preventDefault();
                  showOutput(true);
                  sendFile(fileInput, setLoading)
                }}
              >
                Analyse Receipt
              </Button>
              {output && <ReceiptOutput/>}
            </div>
          </section>
        ) : (
          <>
            <p>Please only select file in .txt format</p>
          </>
        )}
     
      </Form.Group>
    </Form>
  );
};

export default ReceiptInput;
