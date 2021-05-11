import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import View from './components/View';
import winterImages from './styles/winterImages';
import springImages from './styles/springImages';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" variant="light">
          <Nav className="mr-auto">
            <Navbar.Brand href="/">Misha Belov <span className="russ">| Миша белов</span></Navbar.Brand>
            <NavDropdown title="Albums | альбомы" id="basic-nav-dropdown">
              <NavDropdown.Item href="/winter2020">Winter 2020 <span className="russ">| Зима 2020</span></NavDropdown.Item>
              <NavDropdown.Item href="/spring2021">Spring 2021 <span className="russ">| весна 2021</span></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact">Contact <span className="russ">| связаться</span></Nav.Link>
          </Nav>
        </Navbar>
      
        <Switch>
          <Route path="/winter2020">
            <View album={'winter'} photos={winterImages}/>
          </Route>
          <Route path="/spring2021">
            <View album={'spring'} photos={springImages}/>
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
