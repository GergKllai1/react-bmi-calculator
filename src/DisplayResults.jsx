import React, { Component } from "react";
import { bmiCalculation } from "./BMICalculator";

class DisplayResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bmiMessage: "",
      methodName: "Metric"
    };
  }

  calculate() {
    const weight = this.props.weight;
    const height = this.props.height;
    const method = this.state.methodName;
    this.setState({ bmiMessage: bmiCalculation(weight, height, method) });
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
      <div>
        <button onClick={() => this.calculate()}>Caclulate BMI</button>
        <button onClick={() => this.mehtodChange()}>
          {this.state.methodName}
        </button>
        <div>{this.state.bmiMessage}</div>
      </div>
    );
  }
}

export default DisplayResults;
