import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from "./components/MyNavBar";
import ProcessReceipt from "./components/ProcessReceipt";

function App() {
  return <div className="App">
    <MyNavBar/>
    <ProcessReceipt/>
  </div>;
}

export default App;
