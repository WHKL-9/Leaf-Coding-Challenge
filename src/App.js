import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from "./components/MyNavBar";
import ProcessReceiptSect from "./components/ProcessReceiptSect";

function App() {
  return <div className="App">
    <MyNavBar/>
    <ProcessReceiptSect/>
  </div>;
}

export default App;
