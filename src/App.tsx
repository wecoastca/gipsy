import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './modules/Home';
import PageLayout from './common/index';

function App() {
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </PageLayout>
    </Router>

  );
}

export default App;
