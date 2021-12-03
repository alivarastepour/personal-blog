import {Wrapper} from "./About.styles";
import React from "react";
import './styles.scss'

const About = ()=> {
    return <>
        <Wrapper id="about" className='container flex-container-about'>
            <div className="flex-item-About">
                <div className="card1-header">My story</div>
                <div className="card1-body">
                    Many years ago s.one convinced me
                    to learn front-end development basics
                    and honestly it was a good experience
                    as my very first step to the world of technology.
                    then i entered university and started studying
                    Computer Engineering. there, i learned 2 new languages;
                    c++ and java; i really didnt like the former, but the latter
                    was really interesting. after that i decided to learn new technologies
                    by myself; since then i am learning reactjs and other related front-end
                    technologies and i'm SUPER happy with them.
                </div>
            </div>
            <div className="flex-item-About image"></div>
        </Wrapper>
    </>
}

export default About;