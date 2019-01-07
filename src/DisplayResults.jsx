import React, { Component } from 'react'
import { bmiCalculation } from './BMICalculator'

class DisplayResults extends Component {
    
    calculate () {
        const weight = this.props.weight;
        const height = this.props.height;

        return bmiCalculation(weight, height);
    }

    render () {
        return (
            <div id='resposne'>
                {this.calculate()}
            </div>
        )
    }
}

export default DisplayResults