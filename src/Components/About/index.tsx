import {Wrapper} from "./About.styles";
import React from "react";
import './styles.scss'

const About = ()=> {
    return <>
        <Wrapper className='container flex-container'>
            <div className="card"></div>
            <div className="card image"></div>
            <div className="card"></div>
        </Wrapper>
    </>
}

export default About;