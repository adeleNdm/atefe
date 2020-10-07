import React, { Component } from "react";
import Fullpage from "../components/FullPage";
import data from "../data.json";
import "./AboutSection.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
class AboutSection extends Component {
  render() {
    return (
      <div id="About">
        <Fullpage className="second">
          <Container>
            <Row>
              <Col>
                <h4 className="text-responsive">
                  <strong>{data.sections[0].title}</strong>
                </h4>
                <hr className="hr"></hr>

                <div className="paragraphs text-responsive-subt">
                  {data.sections[0].items[0].content}
                  <br />
                  <div className="birthd">
                    <h5>
                    <br />
                      {data.sections[0].items[0].birthday}
                      <br />
                    </h5>
                  </div>
                  <h4 className="text-responsive">
                    {data.sections[0].items[1].title}
                  </h4>
                  <hr className="hr"></hr>

                  <h5> {data.sections[0].items[1].content[0].uni}</h5>
                  <div style={{fontSize:"13px"}}>
                    {data.sections[0].items[1].content[0].date}
                    ----
                    {data.sections[0].items[1].content[0].dis}
                  </div>
                  <h5> {data.sections[0].items[1].content[1].uni}</h5>
                  <div style={{fontSize:"13px"}}>
                    {data.sections[0].items[1].content[1].date}
                    ----
                    {data.sections[0].items[1].content[1].dis}
                  </div>
                  <h5> {data.sections[0].items[1].content[2].uni}</h5>
                  <div style={{fontSize:"13px"}}>
                    {data.sections[0].items[1].content[2].date}
                    ----
                    {data.sections[0].items[1].content[2].dis}
                  </div>

                </div>
              </Col>
            </Row>
          </Container>
        </Fullpage>
      </div>
    );
  }
}

export default AboutSection;
