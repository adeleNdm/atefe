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

                <div className=" text-responsive-subt">
                  <div className="paragraph">
                    {data.sections[0].items[0].content}
                  </div>
                  <br />
                  <div className="birthd">
                    <h5>
                      
                      {data.sections[0].items[0].birthday}
                      <br />
                      <br />
                    </h5>
                  </div>
                  <h4 className="text-responsive">
                    {data.sections[0].items[1].title}
                  </h4>
                  <hr className="hr"></hr>
                  <div>
                    <div className=" text-responsive-subt-uni">
                      {data.sections[0].items[1].content[0].uni}
                    </div>{" "}
                    <div className=" text-responsive-subt-uni-majer" >
                      {data.sections[0].items[1].content[0].date}
                      ----
                      {data.sections[0].items[1].content[0].dis}
                    </div>
                    <div className=" text-responsive-subt-uni">
                      {data.sections[0].items[1].content[1].uni}
                    </div>
                    <div  className=" text-responsive-subt-uni-majer">
                      {data.sections[0].items[1].content[1].date}
                      ----
                      {data.sections[0].items[1].content[1].dis}
                    </div>
                    <div className=" text-responsive-subt-uni">
                      {data.sections[0].items[1].content[2].uni}
                    </div>
                    <div  className=" text-responsive-subt-uni-majer">
                      {data.sections[0].items[1].content[2].date}
                      ----
                      {data.sections[0].items[1].content[2].dis}
                    </div>
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
