import {useState, useEffect} from 'react';
import Articles from './Components/Articles/Articles';
import Menu from './Components/Menu/Menu';
import {Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path={'/'} render={() => {
          return <Redirect to='/home' />
        }}/>

        <Route path={'/:section/:article'} render={() => {
          return (
            <Articles />
          )
        }}/>

        <Route path={'/:section'} render={() => {
          return (
            <Articles />
          )
        }}/>

      </Switch>
    </div>
  )
};

export default App;
