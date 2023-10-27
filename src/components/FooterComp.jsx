// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const FooterComp = function () {
   return (
      <Row className="justify-content-center mt-5">
         <Col
            className="col col-6"
            //  sm={6}
         >
            <Row>
               <Col className="mb-2">
                  <i className="bi bi-facebook footer-icon me-2"></i>
                  <i className="bi bi-instagram footer-icon me-2"></i>
                  <i className="bi bi-twitter-x footer-icon me-2"></i>
                  <i className="bi bi-youtube footer-icon"></i>
               </Col>
            </Row>
            <Row
               //  sm={2}
               //  md={4}
               //  lg={4}
               className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4"
            >
               <Col>
                  <Row>
                     <Col className="footer-links">
                        <p>
                           {/* <a href="#" alt="footer link">
                              Audio and Subtitles
                           </a> */}
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Audio and Subtitles
                           </Button>
                        </p>
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Media Center
                           </Button>
                        </p>
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Privacy
                           </Button>
                        </p>
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Contact us
                           </Button>
                        </p>
                     </Col>
                  </Row>
               </Col>
               <Col>
                  <Row>
                     <Col className=" footer-links">
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Audio Description
                           </Button>
                        </p>
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Investor Relations
                           </Button>
                        </p>
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Legal Notices
                           </Button>
                        </p>
                     </Col>
                  </Row>
               </Col>
               <Col>
                  <Row>
                     <Col className="footer-links">
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Help Center
                           </Button>
                        </p>
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Jobs
                           </Button>
                        </p>
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Cookie Preferences
                           </Button>
                        </p>
                     </Col>
                  </Row>
               </Col>
               <Col>
                  <Row>
                     <Col className="footer-links">
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Gift Cards
                           </Button>
                        </p>
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Terms of Use
                           </Button>
                        </p>
                        <p>
                           <Button
                              className="footer-links-a"
                              href="#"
                              alt="footer link"
                           >
                              Corporate Information
                           </Button>
                        </p>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row>
               <Col className="mb-2">
                  <Button
                     size="sm"
                     type="button"
                     className="rounded-0 mt-3 footer-button"
                  >
                     Service Code
                  </Button>
               </Col>
            </Row>
            <Row>
               <Col className="mb-2 mt-2 copyright">
                  © 1997-2023 Netflix, Inc.
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default FooterComp;
