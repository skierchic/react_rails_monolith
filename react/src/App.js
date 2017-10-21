import React from 'react'
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import CerealsIndexContainer from './containers/CerealsIndexContainer'
import CerealsShowContainer from './containers/CerealsShowContainer'

const App = props => {
  return(
    <div>
      <h1>Cereals!</h1>
      <Router history={browserHistory}>
        <Route path='/cereals' component={CerealsIndexContainer}/>
        <Route path='/' component={CerealsIndexContainer}/>
        <Route path='/cereals/:id' component={CerealsShowContainer}/>
      </Router>
      {/* <Link to= '/cereals' >See all cereals</Link> */}
    </div>
  )
}

export default App;
