import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"; //routeur ne peut avoir qu’un seul élément ou composant enfant.
import './App.css';
import login from './login';
import home from './home';
class App extends React.Component {
  render() {
  return (
    <Router>
   <div className="App">     

   <Switch>
   <Route path="/login" component={login}/> 
   <Route path ="/" component={home} /></Switch> 
    </div>
    </Router>
  );
}
}









export default App;
