/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";

import WorldConcept from "assets/img/WorldConcept.png";

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    const headerBackImg = {
      backgroundImage: `url(${WorldConcept})`,
      backgroundSize: "cover",
    };
    const imgMaxSize= {
      height:"auto",
    };
    const aboutUs ={
      backgroundColor: "rgba(255,255,255, 0.4)",
      border: "3px solid #232323",
      borderRadius: "10px",
    };
    const egg ={
      transform: "scaleX(-1)",

    };
    const tempFix ={
      paddingTop: "60px",
    }
    const tempFix2 ={
      paddingTop:"180px",
    }
    const tempFix3 ={
      paddingTop:"200px",
    }
    return (
      <>
        <Navbar />
        <div className="wrapper">
          <div className="page-header" style={headerBackImg}>
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center">
                <h1 className="text-center text-black">
                  Discover an interactive universe of science adventures.
                </h1>
              </Row>
            </div>
          </div>
          <section className="section section-lg">
            <section className="section">
              <Container>
                <Row className="row-grid justify-content-between">
                <Col>
                    <div className="pl-md-5 content-center" style={tempFix}>
                      <h1 className="text-black">
                        About Us <br />
                      </h1>
                      <p className="text-black mb-3">
                        We help primary school teachers better engage students
                        in STEM (Science, Technology, Engineering, Arts, Maths)
                        learning through interactive EduTech products and
                        story-telling. Through problem-based activities designed
                        with leading STEM educators, encouraging critical
                        thinking, creativity and competence, students and
                        teachers can become equipped for STEM, Artificial
                        Intelligence (AI) and machine-learning driven futures.
                      </p>
                      <br />
                    </div>
                  </Col>
                  {/* <Col lg="4" md="5">
                   <img
                     alt="..."
                     className="img-fluid"
                     src={require("assets/img/Dr Egg Logo.png")}
                     style={imgMaxSize}
                   />
                 </Col> */}
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col lg="6" md="6">
                    <div className="pl-md-5 content-center" style={tempFix2}>
                      <h1 className="text-black">What our research tells us</h1>
                      <p className="text-black">
                        Working with teachers and students revealed a gap as:
                      </p>
                      <br />
                      <ul >
                        <li className="text-black">Students love to engage in STE(A)M learning</li>
                        <li className="text-black">
                          Teachers struggle to teach and engage students in STEM
                          and machine-based learning
                        </li>
                      </ul>
                      <br />
                    </div>
                  </Col>
                  <Col lg="4" md="5">
                   <img
                     alt="..."
                     className="img-fluid"
                     src={require("assets/img/Pigeon.png")}
                     style={imgMaxSize}
                   />
                 </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg">
            {/* <section className="section"> */}
            <Container>
              <Row className="row-grid justify-content-between">
                <Col lg="6" md="6">
                  <div className="pl-md-5 content-center" style={tempFix3}>
                    <h1 className="text-black">How are we different?</h1>
                    <p className="text-black">Our content and STEM and AI teaching resources are:</p>
                    <br />
                    <ul>
                      <li className="text-black">NSW K-6 2019 and IBM AI global curriculum aligned</li>
                      <li className="text-black">
                        Co-designed with Macquarie University’s School of
                        Education
                      </li>
                      <li className="text-black">
                        Based on Self-Determination Learning Theory to build
                        21st century learning skills
                      </li>
                      <li className="text-black">
                        NESA (National Education Standards Accreditation)
                        approval
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg="4" md="5">
                   <img
                     alt="..."
                     className="img-fluid"
                     src={require("assets/img/Spy.png")}
                     style={imgMaxSize}
                   />
                 </Col>
              </Row>
            </Container>
            {/* </section> */}
          </section>
          <section className="section section-lg">
            <Container>
              <h1>Testimonials</h1>
              <Row>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader className="text-black">
                      Dr Egg Adventure Lab has significant potential as a
                      powerful STEM teaching resource
                    </CardHeader>
                    <CardFooter>
                      Dr Anne Forbes and Dr Iain Haye Macquarie University,
                      School of Education
                    </CardFooter>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader className="text-black">
                      Dr Egg is a brilliant storyworld with a science theme
                    </CardHeader>
                    <CardFooter>
                      - Dianne Todaro Wells - 3-4 Teacher, St Xavier School
                      Arncliffe
                    </CardFooter>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader className="text-black">
                      Dr Egg is Authentic learning at its best
                    </CardHeader>
                    <CardFooter>- Dianne Todaro Wells - teacher</CardFooter>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader className="text-black">
                      It's a no brainer activity for them to make self regulated
                      self corrected learning
                    </CardHeader>
                    <CardFooter>- Dianne Todaro Wells - teacher</CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default LandingPage;
