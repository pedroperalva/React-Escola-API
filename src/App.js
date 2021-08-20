import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Input from './components/Input'
/* import {BrowserRouter as Router, Route, Switch } from "react-router-dom"; */

class App extends Component {

  render(){
    return (
      <div>
      <Input style={{width:'200px'}}></Input>
      <Button style={{width:'100px'}}>Enviar</Button>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/drinks/busca" component={BuscaDrinks}/>
          <Route exact path="/sobrenos" component={SobreNos}/>
          <Route exact path="/contato" component={Contato}/>
        </Switch>
      </Router> */}
      </div>
    );
  }
  
}

export default App;
