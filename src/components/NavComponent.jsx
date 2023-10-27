import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import log from "assets/logo.png";
// import NavDropdown from "react-bootstrap/NavDropdown";

const NavComponent = function () {
   return (
      <Navbar
         expand="lg"
         className="bg-primary-color mt-0"
         // className="navbar navbar-expand-lg bg-dark bg-primary-color mt-0"
         // databstheme="dark"
      >
         <Container fluid>
            <Navbar.Brand href="#">
               <img
                  src="./assets/logo.png"
                  width="100px"
                  height="55px"
                  className="d-inline-block align-top"
                  alt="Netflix logo"
               />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="navbar-nav w-100 mb-2 mb-lg-0">
                  <Nav.Link className="text-white-50" href="#">
                     Home
                  </Nav.Link>
                  <Nav.Link className="text-white-50" href="#">
                     TV Shows
                  </Nav.Link>
                  <Nav.Link className="text-white-50" href="#">
                     Movies
                  </Nav.Link>
                  <Nav.Link className="text-white-50" href="#">
                     Recently Added
                  </Nav.Link>
                  <Nav.Link className="text-white-50" href="#">
                     My List
                  </Nav.Link>
                  <div className="d-flex align-items-center ms-auto me-0">
                     <i className="bi bi-search icons"></i>
                     <div id="kids" className="fw-bold">
                        KIDS
                     </div>
                     <i className="bi bi-bell icons"></i>
                     <i className="bi bi-person-circle icons"></i>
                  </div>
                  {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">
                        Action
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">
                        Another action
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">
                        Something
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">
                        Separated link
                     </NavDropdown.Item>
                  </NavDropdown> */}
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavComponent;
