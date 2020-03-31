import React from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './screen/home'
import List from './screen/list'

class App extends React.Component{
  render(){
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    )

    return (
      <Switch>
        <App />
      </Switch>
    )
  }
}

export default App;
