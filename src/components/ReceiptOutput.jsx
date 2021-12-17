import { Row, Col } from "react-bootstrap";
import "../App.css"
import {endpoint} from "../utilities/function";
import {useState, useEffect} from "react"


const ReceiptOutput = () => {
  const [loading, setLoading] = useState(true)
  const [responses, showResponses] = useState({})

  const showResults = async () => {
    try {
      const response = await fetch(endpoint)
      if(response.ok){
        let data = await response.json()
        showResponses(data)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect (()=>{
    showResults()
  },[loading])
  return (
    <div>
      {loading === false && responses.blocks.map((response, index) => (
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


