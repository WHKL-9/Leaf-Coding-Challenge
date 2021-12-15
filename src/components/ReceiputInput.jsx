import { Form, Button } from "react-bootstrap";
import "../App.css";
import { useState, useEffect, useRef } from "react";



const ReceiptInput = () => {
  const [fileInput, setFileInput] = useState();
  const [preview, setPreview] = useState("")
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef()

  useEffect(()=>{
    if(fileInput){
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      // to read a data url 
      reader.readAsText(fileInput)
    }else{

    }
  }, [fileInput])
  return (
    <Form>
      <Form.Group controlId="formFile" className="mb-2">
        <Button onClick = {(event)=>{
          event.preventDefault()
          fileInputRef.current.click()
        }}>Choose File</Button>
        <Form.Control
          type="file"
          className="UploadFile"
          accept=".txt"
          style={{display: "none"}}
          ref = {fileInputRef}
          onChange={(event) => {
            // only access the first file
            const file = event.target.files[0]
            if (file &&file.type.substring(0,4) == "text") {
              setFileInput(file)
            } else {
              setFileInput(null)
            }
          }
          }
        />
      <div style={{background: "red"}}>
        {preview}</div>
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
