import React, { Component } from "react";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import ExperienceSection from "./sections/ExperienceSection";
import NavCom from "./components/NavCom";
import SnowStorm from "react-snowstorm";

import "./App.css";

class App extends Component {
   
  render() {
    return (
      <div className="App">
        <SnowStorm
          animationInterval={120}
          snowCharacter={"*"}
          vMaxY={2}
          vMaxX={2}
        />
        <NavCom />
        
        <title>atele nademi | عاطفه نادمی </title>
        <TitlesAndIcons/>
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
      </div>
    );
  }
}

export default App;
