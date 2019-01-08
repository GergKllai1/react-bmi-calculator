import React, { Component } from "react";
import { bmiCalculation } from "./BMICalculator";

class DisplayResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
        bmiMessage: "",
        };
    }

    calculate() {
        const weight = this.props.weight;
        const height = this.props.height;
        const method = this.props.methodName;
        this.setState({ bmiMessage: bmiCalculation(weight, height, method) });
    }

    render() {
        return (
        <div className="p-4">
            <button 
            className="p-2 m-2 w-1/6 b-2 border-2 hover:border-teal rounded-full bg-teal-light hover:bg-white  text-white hover:text-black font-bold"
            onClick={() => this.calculate()}>Caclulate BMI</button>
            <div className="flex justify-center">
                <div className="border-2 bg-teal-light p-4 rounded-lg text-white">{this.state.bmiMessage}</div>
            </div>
        </div>
        );
    }
}

export default DisplayResults;
