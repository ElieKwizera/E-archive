import React from 'react';
import HomePage from './Homepage';
import AddMessage from './AddMessage';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
const app = () => {

    return (
       <div className="container">
           <Router>
              <Switch>
                  <Route path='/' exact component={HomePage}></Route>
                  <Route path='/createmessage' exact component={AddMessage}></Route>
                <HomePage/>
              </Switch>
           </Router>
          
       </div>
    )
}

export default app
