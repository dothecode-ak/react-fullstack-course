
import './App.css';
// import ClassComponent from './components/ClassComponent';
// import FunctionalCompo from './components/FunctionalCompo';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import List from './components/List';
import Table from './components/Table';
import Form from './FormComponent';
import APIUser from './components/Api';
import { Nav, Navbar, Container } from 'react-bootstrap'
import React from 'react';
import { Suspense } from 'react';
import('./components/advance/math').then((result) => {
  console.log(result.add(1, 10));
});
const About = React.lazy(() => import('./components/advance/about'));
function App() {
  //  console.log(add(1,2));
  return (
    <Suspense className="App" fallback={<div>Loading</div>}>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Demo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link> <Link to="/table">Table</Link></Nav.Link>
                <Nav.Link> <Link to="/form">Form</Link></Nav.Link>
                <Nav.Link> <Link to="/list">List</Link></Nav.Link>
                <Nav.Link> <Link to="/api">API</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/api">
            <APIUser />
          </Route>
        </Switch>
      </Router>
      <About />
    </Suspense>
  );
}

export default App;
