import React from "react";
import {Wrapper} from "./Footer.styles";
import './styles.scss'

const Footer = () => {
    return <>
        <Wrapper className='glass-footer'>
            <div className='info'>
                <div>powered by </div>
                <i className="fab fa-react animate"></i>
            </div>
        </Wrapper>
    </>
}
export default Footer;