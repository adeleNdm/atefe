import React, { Component } from "react";
import SkillCard from "../components/SkillCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SkillSection.css";

class SkillSection extends Component {
  render() {
    return (
      <div id="Skills">
        <SkillCard/>
      </div>
    );
  }
}

export default SkillSection;
