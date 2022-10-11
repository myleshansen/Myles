import React from 'react';

import '../styles/Intro.css'
import Typist from 'react-typist'
import "react-typist/dist/Typist.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

class Intro extends React.Component {
    render () {
        return (
            <div id='intro'>
                <Typist avgTypingDelay={100}>
                    <span className=''>Hello</span>
                    <Typist.Delay ms={500} />
                    <Typist.Backspace count={4} delay={200} />
                    i, welcome to my website.
                    <br /> 
                    I'm <span className='index-name'>Myles.</span>
                    
                </Typist>
                <p style={{color: 'black'}}>I'm a software engineer currently based in Denver, CO. I'm interested in full-stack development. But you'll probably find me working on just about anything.</p>
                <div className='arrow-down'>
                    <ArrowDownwardIcon className='arrow'/>
                </div>
            </div>
        )
    }
}

export default Intro;