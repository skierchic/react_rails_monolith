import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import CerealsIndexContainer from './containers/CerealsIndexContainer'
import CerealsShowContainer from './containers/CerealsShowContainer'

const App = props => {
  return(
    <div>
      <h1>Cereals!</h1>
      <Router history={browserHistory}>
        <Route path='/cereals' component={CerealsIndexContainer}/>
        <Route path='/cereals/:id' component={CerealsShowContainer}/>
      </Router>
    </div>
  )
}

export default App;
