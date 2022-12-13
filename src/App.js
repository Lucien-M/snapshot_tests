// import logo from "./logo.svg";
import "./App.css";
import GitHubCard from "./components/GitHubCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App pt-5">
      <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <GitHubCard />
        </Col>
      </Row>
    </div>
  );
}

/*initial test
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>testing</h2>
      </header>
    </div>
  );
}*/

export default App;
