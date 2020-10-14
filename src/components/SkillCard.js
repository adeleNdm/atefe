import React, { Component } from "react";
import "./SkillCard.css";
import Fullpage from "../components/FullPage";
import data from "../data.json";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div>
        
        <Fullpage className="third">

        <div className="d-none d-md-block" style={{height:"15%"}}></div>          <Container>
            <Row>
              <Col>
                <h4 className="text-responsive">
                  <strong>{data.sections[1].title}</strong>
                </h4>
                <hr className="hr"></hr>
              </Col>
            </Row>
            <Row>
              <Col sm={4} xs={4} md={3}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[0].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[0].content.percent}
                        variant=""
                        label={data.sections[1].items[0].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} xs={4} md={3}>
                <div class="card" style={{}}>
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[1].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[1].content.percent}
                        label={data.sections[1].items[1].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} xs={4} md={3}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[2].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[2].content.percent}
                        variant=""
                        label={data.sections[1].items[2].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>{" "}
              </Col>
              <Col sm={4} xs={4} md={3}>
                <div class="card" style={{}}>
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[3].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[3].content.percent}
                        variant=""
                        label={data.sections[1].items[3].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} xs={4} md={3}>
                <div class="card" style={{}}>
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[4].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[4].content.percent}
                        label={data.sections[1].items[4].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} xs={4} md={3}>
                <div class="card" style={{}}>
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[5].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[5].content.percent}
                        label={data.sections[1].items[5].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} xs={4} md={3}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[6].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[6].content.percent}
                        label={data.sections[1].items[6].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} xs={4} md={3}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[7].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[7].content.percent}
                        label={data.sections[1].items[7].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} xs={4} md={3}>
                <div class="card" style={{}}>
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[8].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[8].content.percent}
                        label={data.sections[1].items[8].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} xs={4} md={3}>
                <div class="card" style={{}}>
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[9].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[9].content.percent}
                        label={data.sections[1].items[9].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} xs={4} md={3}>
                <div class="card" style={{}}>
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[10].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[10].content.percent}
                        label={data.sections[1].items[10].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={4} xs={4} md={3}>
                <div class="card" style={{}}>
                  <div class="card-body">
                    <h5 class="card-title">
                      {data.sections[1].items[11].content.title}
                    </h5>
                    <p class="card-text">
                      <ProgressBar
                        now={data.sections[1].items[11].content.percent}
                        label={data.sections[1].items[11].content.percent}
                        style={{ width: "100%" }}
                      />
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Fullpage>
        <div className="d-block d-md-none"></div>
      </div>
    );
  }
}

export default SkillCard;
