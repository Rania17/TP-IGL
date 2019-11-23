import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Student } from './Components/Student.js'
import { Teacher } from './Components/Teacher.js'

export class App extends Component {
  /*const[isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);*/

  render() {
    return (
      <div className='App container'>
        <Router>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Gestions_Scolarité</NavbarBrand>
            <NavbarToggler /*onClick={toggle}*/ />
            <Collapse /*isOpen={isOpen}*/ navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink><Link to="/">Accueil</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/students">Etudiants</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/teachers">Enseignants</Link></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <Route path="/teachers">
            <br/><br/>
              <Teacher />
            </Route>
            <Route path="/students">
              <br/><br/>
              <Student />
            </Route>
            <Route path="/">
            ppppppppppppppppppppppppppppppppppppppppppppppppp
            <img src="esi.png" alt=""/>
            </Route>
          </Switch>
        </Router>
      </div>

    )
  }
}

export default App
