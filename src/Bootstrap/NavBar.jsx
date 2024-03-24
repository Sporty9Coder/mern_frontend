import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from '../Context/Home';
import BsCard from './BsCard';
import Filterbutton from '../CardComp/Filterbutton';
import Footer from './Footer';
import Profile from './Profile';
import NetworkStatus from '../Network';

function NavBar() {
  return (
    <>
    <BrowserRouter>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/bscard">Cards</Nav.Link>
            <Nav.Link href="/filter">Filter data</Nav.Link>
            <Nav.Link href="*"></Nav.Link>
            <NetworkStatus/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/bscard' element={<BsCard></BsCard>}></Route>
        <Route path='/filter' element={<Filterbutton></Filterbutton>}></Route>
        <Route path='*' element={<Profile></Profile>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default NavBar;