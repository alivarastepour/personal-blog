import React from "react";
import { Wrapper, Content } from "./Spinner.styles";
import './styles.scss'
import {quotes} from "./text-data";

const Spinner = () => {
    const rand = Math.floor(Math.random() * 1000) % 5;
    const value = quotes[rand];
    const theme = localStorage.getItem('theme')?.toLowerCase();    
    return <>
        <Wrapper className={`wrapper ${theme ? `wrapper-${theme}` : `wrapper-default`}`}>
                <Content className={`content ${theme ? `content-${theme}` : `content-default`}`}/>
            <div className='welcome-text'>
                <div className='text'>{value.text}</div>
                <br />
                <blockquote className='blockquote-footer'>{value.name}</blockquote>
            </div>
        </Wrapper>
    </>
}
export default Spinner;