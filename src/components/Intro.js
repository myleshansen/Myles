import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <Typist avgTypingDelay={100}>
          <span className="">Hello</span>
          <Typist.Delay ms={500} />
          <Typist.Backspace count={4} delay={200} />
          i, welcome to my website.
          <br />
          I'm <span className="index-name">Myles.</span>
        </Typist>
        
        <div className="arrow-down">
          <ExpandMoreIcon className="arrow"/>
        </div>
      </div>
    );
  }
}

export default Intro;
