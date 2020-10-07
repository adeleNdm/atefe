import React, { Component } from "react";
import Fullpage from "../components/FullPage";
import data from "../data.json";
import "./ExperienceSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";

import UpIcon from "../components/UpIcon";

class ExperienceSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Experience" className="forth" >
        <div className="d-none d-md-block" style={{height:"60px"}}></div>        
                
          <Container>
            <Row>
              <Col sm={12} xs={12}>
                <h4 className="text-responsive">
                  <strong>{data.sections[2].title}</strong>
                </h4>
                <hr className="hr"></hr>
                <br />

                <div className="paragraphs text-responsive-subt">
                  {data.sections[2].items.map((d) => {
                    return (
                      <Row>
                        <Col  sm={12} xs={12} md={11}>
                      <p className="paragraphs content-size-resp">
                        {/* <p className="title"> {d.y} </p>
                        {d.l}
                        {d.w1}
                        {d.w} */}
                      </p>
                      </Col>
                      </Row>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        <UpIcon />
        <div style={{height:"120px"}}></div>        
      </div>
    );
  }
  
}

export default ExperienceSection;
