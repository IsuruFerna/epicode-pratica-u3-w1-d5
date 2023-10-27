import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const BelowNavComp = function () {
   return (
      <Container fluid>
         <div className="d-flex justify-content-between">
            <div className="d-flex">
               <h2 className="mb-4">TV Shows</h2>
               <div className="btn-group" role="group">
                  <div className="dropdown ms-4 mt-1">
                     <Dropdown>
                        <Dropdown.Toggle
                           className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                           id="dropdown-basic"
                           style={{ backgroundColor: "#221f1f" }}
                        >
                           Genres
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                           <Dropdown.Item href="#">Comedy</Dropdown.Item>
                           <Dropdown.Item href="#">Drama</Dropdown.Item>
                           <Dropdown.Item href="#">Thriller</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </div>
               </div>
            </div>
            <div>
               <i className="bi bi-grid icons"></i>
               <i className="bi bi-grid-3x3 icons"></i>
            </div>
         </div>
      </Container>
   );
};

export default BelowNavComp;
