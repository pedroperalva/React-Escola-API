import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import QuemSomos from '../pages/QuemSomos'
import Contato from '../pages/Contato'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Tour from '../pages/Tour'
import Sistema from '../pages/Sistema'

const Rotas = () => (

  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/quemsomos" component={QuemSomos} />
      <Route exact path="/contato" component={Contato} />
      <Route exact path="/tour" component={Tour} />
      <Route exact path="/sistema" component={Sistema} />
      <Route exact path="/sistema/consulta" component={Sistema} />
      <Route exact path="/sistema/altera" component={Sistema}/>
    </Switch>
  </Router>
)

export default Rotas