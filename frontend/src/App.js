import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import ToyApp from './views/ToyApp';
import NavBar from './cmps/NavBar';
import AboutUs from './views/AboutUs';
import ToyEdit from './views/ToyEdit';

import './styles/global.scss';


const history = createBrowserHistory();


function App() {
  return (
      <div className="App">
        <header>
          <Router history={history}>
            <NavBar></NavBar>
            <Switch>
            <Route component={ToyApp} path="/" exact></Route>
              <Route component={AboutUs} path="/aboutus" exact></Route>
              <Route component={ToyEdit} path="/toyedit/:id" exact></Route>
              <Route component={ToyEdit} path="/toyedit" exact></Route>
              
            </Switch>
          </Router>
        </header>
      </div>
  );
}

export default App;
