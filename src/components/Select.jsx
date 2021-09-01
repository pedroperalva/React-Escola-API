import React, { Component } from 'react';
import styled from 'styled-components'

class Select extends Component {

    render() {
        return (
            <Selects onChange={this.props.onChange} style={this.props.style} value={this.props.changeValue}>
                <Options value={'first'}>{this.props.value}</Options>
                <Options value={'second'}>{this.props.value1}</Options>
                <Options value={'third'}>{this.props.value2}</Options>
                <Options value={'fourth'}>{this.props.value3}</Options>
            </Selects>
        );
    }
}
const Selects = styled.select`
    width: 50%;
    height: 40px;
    justify-self: center;
    border: 2px solid #001B44;
    font-size: 18px;
    
`
const Options = styled.option`
    
`
export default Select;