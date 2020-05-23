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
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardText,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];

let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {

    const pageHHeader = {
        minHeight: "100px",
    }
    return (
      <>
        <Navbar />
        <div className="wrapper">
          <div className="page-header" style={pageHHeader}>
          </div>
          <div className="section">
          <Container className="align-items-center">
              <Row>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/IMG_1927.jpg")}
                      />
                      <h4 className="title">Founder and Creative Director</h4>
                      <h4 className="title">Dr. Catherine Fargher</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h4 className="title">Scriptwriter</h4>
                      <h4 className="title">Gina Roncoli</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h4 className="title">STEM Education Consultant</h4>
                      <h4 className="title">Dr. Anne Forbes</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      Anne Forbes is a Senior Lecturer in STEM Education in the Department of Educational Studies at Macquarie University. Anne is also working with IBM to implement a Global Artificial Intelligence Curriculum Framework, and is the lead author on a STEM Education textbook for Australian pre-service primary teachers. She has been invited to share her research internationally as a keynote speaker, and to share her ideas about STEM education with parents, teachers and principals as an invited speaker.
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/Lindy walsh.jpg")}
                      />
                      <h4 className="title">Gifted Education Consultant (Queenwood School)</h4>
                      <h4 className="title">Dr. Rosalind Walsh</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/David Ng.jpg")}
                      />
                      <h4 className="title">Business Advisor</h4>
                      <h4 className="title">David Ng</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/Lia Zalums.jpg")}
                      />
                      <h4 className="title">Business and Leader Development Advisor</h4>
                      <h4 className="title">Lia Zalums</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/Monica Sanki.jpg")}
                      />
                      <h4 className="title">Legal Advisor</h4>
                      <h4 className="title">Monica Sanki</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h4 className="title">MVP Product Coordinator and Digital Marketing Specilist</h4>
                      <h4 className="title">Shivika Kumar</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      Shivika enjoys taking a creative approach to strategic management and digital marketing. She is also an experienced Content Creator with work experience in video marketing and commercial TVCs. A self-proclaimed "cat lady", Shivika enjoys music, movies and travelling.
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/Crimson Mole.jpg")}
                      />
                      <h4 className="title">Accountant</h4>
                      <h4 className="title">Crimson Mole</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      Crimson has a variety of interests which include Marketing, Crafts, Music and Architecture. A bit of a jack of all trades, she likes a bit of everything, and give her some yarn she’ll make a scarf or a coaster a bit like Vivi!
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/Jennyfer Ong.png")}
                      />
                      <h4 className="title">Concept Artist and Animator</h4>
                      <h4 className="title">Jennyfer Ong</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      Jennyfer graduated from the University of Sydney with a degree in Physics and Chemistry, before switching to concept art design for video games. When not on the job, she is usually working on her own art, programming, and music, in a bid to accrue as many skills of questionable usefulness as she can.
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/Saba Saeidi.jpg")}
                      />
                      <h4 className="title">2D Assistant Animator</h4>
                      <h4 className="title">Saba Saeidi</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      Saba graduated from SAE Media Institute with a Bachelor of Animation to persue a career as a Storyboard Artist and Animator. She dreams of one day creating her own original series. Saba is passionate about her art and enjoys spending her free time developing her artic and writing skills.
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/Saima Ali.JPG")}
                      />
                      <h4 className="title">Graphic and UI Designer </h4>
                      <h4 className="title">Saima Ali</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/Chinh Do.jpg")}
                      />
                      <h4 className="title">Graphic Designer</h4>
                      <h4 className="title">Chinh Do</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/Arvin Han.jpg")}
                      />
                      <h4 className="title">Web Developer and UX Designer</h4>
                      <h4 className="title">Arvin Han</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      Arvin is currently studying Bachelor of IT  with a major in Software Technology at Macquarie University, Sydney. His professional expertise includes HTML, CSS, JS, Java and c#. Arvin also holds a certificate in Kitchen Operation II.
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/Minjie Shi.JPG")}
                      />
                      <h4 className="title">UX Designer</h4>
                      <h4 className="title">Minji Shi</h4>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                      Minjie discovered his passion for User Experience design while being a regular participant of hackathons on weekends. He has recently taken the leap of faith and shifted his career from project management to UX design. Nowadays, he works with organisations to conduct UX researches and build prototypes to ensure the products created by these organisations can solve their users' real pain points. Other than going to hackathons, he also enjoys watching super-hero movies in his spare time. 
                      </CardText> 
                    </CardBody>
                  </Card>
                </Col>

              </Row>
            </Container>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default ProfilePage;
