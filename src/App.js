import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomePhotos from './HomePhotos';
import ContactForm from './ContactForm';
import AllPhotos from './AllPhotos';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/" >Misha Belov <span className="russ">| Миша белов</span></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="all">All <span className="russ">| все</span></Nav.Link>
          <Nav.Link href="contact">Contact <span className="russ">| связаться</span></Nav.Link>
        </Nav>
      </Navbar>
      
      <Switch>
          <Route path="/all">
            <AllPhotos />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
          <Route path="/">
            <HomePhotos />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
