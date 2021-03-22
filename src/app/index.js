import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../containers/Home';
import LifeCycle from '../containers/Lifecycle';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/lifecycle" component={LifeCycle} />
      </Fragment>
    </BrowserRouter>
  )
}

export default App;