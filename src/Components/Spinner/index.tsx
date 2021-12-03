import React from "react";
import { Wrapper, Content } from "./Spinner.styles";
import './styles.scss'
import {quotes} from "./text-data";

const Spinner = () => {
    const rand = Math.floor(Math.random() * 1000) % 5;
    const value = quotes[rand];
    const theme = 'wrapper-' + localStorage.getItem('theme')?.toLowerCase();    
    return <>
        <Wrapper className={`wrapper ${theme}`}>
                <Content className='content'/>
            <div className='welcome-text'>
                <div className='text'>{value.text}</div>
                <blockquote className='blockquote'>{value.name}</blockquote>
            </div>
        </Wrapper>
    </>
}
export default Spinner;