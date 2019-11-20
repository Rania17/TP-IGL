import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"; //routeur ne peut avoir qu’un seul élément ou composant enfant.
import './App.css';
import login from './login';

class Todos extends React.Component
{
  render() {
    return(

       
  <div class="nav">
    <Link to="/login"> <button class="boutonco"><span>Se connecter</span>
    </button> </Link>
  </div>  


    );

}
}
export default Todos;