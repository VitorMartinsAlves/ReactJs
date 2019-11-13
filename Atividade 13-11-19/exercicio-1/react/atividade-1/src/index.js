import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './assets/pages/home/Home';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './assets/pages/home/Home';

const Rotas = (
    <Router>
        <div>
            <Switch>
            <Route exact path="/home" component={Home} />
            </Switch>
        </div>
    </Router>
)




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
