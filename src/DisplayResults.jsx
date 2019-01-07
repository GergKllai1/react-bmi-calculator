import React, { Component } from 'react'

class DisplayResults extends Component {
    
    calculate () {
        const weight = this.props.weight;
        const height = this.props.height;
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