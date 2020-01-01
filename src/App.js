import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import recentEarthquakes from '../src/components/Earthquakes'

function App() {
    return (
      <Router>
        <div className="container">
          <Route exact path='/' component={()=><h1>Latest</h1>} />
          <Route path='/earthquakes' component={recentEarthquakes} />
          <Route path='/eruptions' component={()=><h1>Eruptions</h1>} />
        </div>
      </Router>
    )
}

export default App;
