import React, { Component } from 'react';
import styled from 'styled-components'

class TextArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:""
        };
    }
    handleValue= (e)=>{
        console.log(e.target.value)
        this.setState({value:e.target.value})
    }
    render() { 
        return (
            <Container> 
                <Label>{this.props.children}</Label>
                <InputArea style={this.props.style} onChange={this.handleValue} ref={this.props.ref} type="text"/>
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
` 
const InputArea = styled.input`
    height: 120px;
    border-radius: 5px;
    border: 1px solid #0084ff66;
    padding: 0;
    font-size: 18px;
    color: #101010;
`
export default TextArea;