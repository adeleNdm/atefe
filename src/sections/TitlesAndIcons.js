import React, { Component } from "react";
import Fullpage from "../components/FullPage";
import DownIcon from "../components/DownIcon";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitlesAndIcons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form, Container } from "react-bootstrap";
import { Link, Element, animateScroll as scroll } from "react-scroll";
class TitlesAndIcons extends Component {
  render() {
    return (
      <div>
        <Fullpage className="first">
          <Container>
            <Row className="border-1">
              <Col sm={12} xs={12} md={12}>
                <div className="on-border" >
                  <img className="img-size" src={data.icons.profile} alt="atefeh nademi" />
                </div>
                
                </Col>
              <Col sm={12} xs={12} md={12}>
                <div className="main-title">
                  <h1>{data.title}</h1>
                  <br />
                </div>
                </Col>
                <Col>

                <div className="text-responsive-subt">
                  <strong>{data.subtitle}</strong>
                </div>
                <br />

                <div className="icon-wrapper">
                  {Object.keys(data.links).map((key) => {
                    return (
                      <div className="icon ">
                        <SocialIcon url={data.links[key]} />
                      </div>
                    );
                  })}
                </div>
                <div
                  className="text-responsive-subt"
                  style={{
                    color: this.props.title_color,
                  }}
                >
                  {data.contact}
                  <br />
                  {data.contact1}
                  <br />
                  <strong>{data.phone}</strong>
                  <br />
                  <br />
                  <br />
                </div>
              </Col>
            </Row>
          </Container>
        </Fullpage>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={400}
          delay={300}
        >
          <DownIcon icon={data.icons.down} onClick={() => console.log("im")} />
        </Link>
        <Element name="About" className="element"></Element>
      </div>
    );
  }
}

export default TitlesAndIcons;
