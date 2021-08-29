import React, { Component } from 'react';
import styled from 'styled-components'

class Input extends Component {

    render() {
        return (
            <Container>
                <Label>{this.props.children}</Label>
                <InputArea style={this.props.style} value={this.props.value} onChange={this.props.onChangeValue}
                 ref={this.props.ref} name={this.props.name} type={this.props.type} />
            </Container>
        );
    }
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const Label = styled.label`
    margin-bottom: 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    text-align: start;
`

const InputArea = styled.input`
    height: 35px;
    border-radius: 5px;
    border: 1px solid #001B44;
    padding: 0;
    font-size: 18px;
    color: #101010;
`
export default Input;