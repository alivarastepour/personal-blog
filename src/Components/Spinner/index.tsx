import React from "react";
import { Wrapper, Content } from "./Spinner.styles";
import './styles.scss'
import {quotes} from "./text-data";

const Spinner = () => {
    const rand = Math.floor(Math.random() * 1000) % 5;
    const value = quotes[rand];
    return <>
        <Wrapper className='wrapper'>
                <Content className='content'/>
            <div className='welcome-text'>
                <div className='text'>{value.text}</div>
                <blockquote className='blockquote'>{value.name}</blockquote>
            </div>
        </Wrapper>
    </>
}
export default Spinner;