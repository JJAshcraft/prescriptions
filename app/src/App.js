import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      ptName: "",
      ptAddress: "",
      ptState: "",
      ptZip: "",
      data: []
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Prescriptions API app.</p>
        </header>
      </div>
    );
  }
}

export default App;
