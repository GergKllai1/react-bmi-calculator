import React, { Component } from "react";
import "./App.css";
import "./css/tailwind.css";
import DisplayResults from "./DisplayResults";
import { UndrawCalculator } from "react-undraw-illustrations";

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
      <div className="App text-center bg-grey-lightest h-screen font-sans text-lg text-grey-darkest">
        <div className="bg-teal-lightest border-2 pb-2">
          <UndrawCalculator />
          <h2 className="">BMI Calculator</h2>
        </div>
        <div>
          <label>
            Weight {this.state.methodName === "Metric" ? "(kgs)" : "(pounds)"}
          </label>
          <br />
          <input
            className="text-center bg-grey-light border-2 focus:bg-white p-1 rounded-lg"
            name="weight"
            value={this.state.weight}
            onChange={e => this.setState({ weight: e.target.value })}
          />
        </div>
        <div>
          <label>
            Height {this.state.methodName === "Metric" ? "(cms)" : "(inches)"}
          </label>
          <br />
          <input
            className="text-center bg-grey-light focus:bg-white p-1 rounded-lg"
            name="weight"
            value={this.state.height}
            onChange={e => this.setState({ height: e.target.value })}
          />
          <br />
          <button
            className="p-2 m-2 w-1/6 b-2 border-2 hover:border-teal rounded-full bg-teal-light hover:bg-white  text-white hover:text-black font-bold"
            onClick={() => this.mehtodChange()}
          >
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
