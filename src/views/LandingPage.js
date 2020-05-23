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
    const imgMaxSize = {
      height: "auto",
    };
    const headerBackImg = {
      backgroundImage: `url(${WorldConcept})`,
      backgroundSize: "cover",
    };
    const contentCenterBlur = {
      backgroundColor: "rgba(255,255,255, 0.4)",
      border: "3px solid #232323",
      borderRadius: "10px",
    };


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
                  <Col md="10">
                    <div className="pl-md-5">
                      <h1 className="text-white">
                        About Us <br />
                      </h1>
                      <p className="text-white mb-3">
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
                  <Col md="10">
                    <div className="pl-md-5">
                      <h1>What our research tells us</h1>
                      <p>
                        Working with teachers and students revealed a gap as:
                      </p>
                      <br />
                      <ul>
                        <li>Students love to engage in STE(A)M learning</li>
                        <li>
                          Teachers struggle to teach and engage students in STEM
                          and machine-based learning
                        </li>
                      </ul>
                      <br />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg">
            {/* <section className="section"> */}
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="10">
                  <div className="pl-md-5">
                    <h1>How are we different?</h1>
                    <p>Our content and STEM and AI teaching resources are:</p>
                    <br />
                    <ul>
                      <li>NSW K-6 2019 and IBM AI global curriculum aligned</li>
                      <li>
                        Co-designed with Macquarie University’s School of
                        Education
                      </li>
                      <li>
                        Based on Self-Determination Learning Theory to build
                        21st century learning skills
                      </li>
                      <li>
                        NESA (National Education Standards Accreditation)
                        approval
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
            {/* </section> */}
          </section>
          <section className="section section-lg">
            {/* <section className="section"> */}
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="10">
                  <div className="pl-md-5">
                    <h1>Testimonials</h1>
                    <br />
                    <ul>
                      <li>
                        <strong>
                          Dr Egg Adventure Lab has significant potential as a
                          powerful STEM teaching resource
                        </strong>
                        : <br />
                        Dr Anne Forbes and Dr Iain Haye Macquarie University,
                        School of Education
                      </li>
                      <br />
                      <li>
                        <strong>
                          Dr Egg is a brilliant storyworld with a science theme
                        </strong>{" "}
                        <br />- Dianne Todaro Wells - 3-4 Teacher, St Xavier
                        School Arncliffe
                      </li>
                      <br />
                      <li>
                        <strong>
                          Dr Egg is Authentic learning at its best
                        </strong>{" "}
                        <br />- Dianne Todaro Wells - teacher
                      </li>
                      <br />
                      <li>
                        <strong>
                          It's a no brainer activity for them to make self
                          regulated self corrected learning
                        </strong>{" "}
                        <br />- Dianne Todaro Wells - teacher
                      </li>
                      <br />
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
            {/* </section> */}
          </section>
          {/*           
          <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path5.png")}
            />
            <img
              alt="..."
              className="path3"
              src={require("assets/img/path2.png")}
            />
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">Your best benefit</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">Low Commission</h4>
                        <hr className="line-primary" />
                        <p>
                          Divide details about your work into parts. Write a few
                          lines about each one. A paragraph describing a feature
                          will.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">High Incomes</h4>
                        <hr className="line-warning" />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing feature will be a feature.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Verified People</h4>
                        <hr className="line-success" />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing be enough.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path5.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/chester-wade.jpg")}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Safe</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">573 K</CardTitle>
                          <p className="card-category text-white">
                            Satisfied customers
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">10 425</CardTitle>
                          <p className="card-category text-white">Business</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Awesome features</h3>
                    <p>
                      The design system comes with three pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Carefully crafted components</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Super friendly support team</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <Col md="12">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <hr className="line-info" />
                      <h5 className="card-category">Total Investments</h5>
                      <CardTitle tag="h2">Performance</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={bigChartData.data}
                      options={bigChartData.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </section>
          <section className="section section-lg section-coins">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png")}
            />
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    Choose the coin{" "}
                    <span className="text-info">that fits your needs</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/bitcoin.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Light Coin</h4>
                          <span>Plan</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>50 messages</ListGroupItem>
                          <ListGroupItem>100 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/etherum.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Dark Coin</h4>
                          <span>Plan</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>150 messages</ListGroupItem>
                          <ListGroupItem>1000 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/ripp.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Bright Coin</h4>
                          <span>Plan</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>350 messages</ListGroupItem>
                          <ListGroupItem>10K emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
           */}
          <Footer />
        </div>
      </>
    );
  }
}

export default LandingPage;
