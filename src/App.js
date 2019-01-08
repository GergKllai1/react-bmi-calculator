import React, { Component } from "react";
import "./App.css";
import './css/tailwind.css';
import DisplayResults from "./DisplayResults";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: "",
      methodName: "Metric"
    };
  }

  mehtodChange() {
    if (this.state.methodName === "Metric") {
      this.setState({ methodName: "Imperial" });
    } else {
      this.setState({ methodName: "Metric" });
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <label>
            Weight {this.state.methodName === "Metric" ? "(kgs)" : "(pounds)"}
          </label>
          <input
            name="weight"
            value={this.state.weight}
            onChange={e => this.setState({ weight: e.target.value })}
          />
        </div>
        <div>
          <label>
            Height {this.state.methodName === "Metric" ? "(cms)" : "(inches)"}
          </label>
          <input
            name="weight"
            value={this.state.height}
            onChange={e => this.setState({ height: e.target.value })}
          />
          <br />
          <button onClick={() => this.mehtodChange()}>
            {this.state.methodName}
          </button>
        </div>
        <DisplayResults
          weight={this.state.weight}
          height={this.state.height}
          methodName={this.state.methodName}
        />
      </div>
    );
  }
}

export default App;
