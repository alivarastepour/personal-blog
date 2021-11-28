import {Wrapper} from "./Contact-us.styles";
import React from "react";
import './styles.scss'
import {socialMedias} from "./socialMedia-data";


const ContactUs = () => {

    return <>
        <Wrapper className='container glass-contact-us'>
            <div className='container-body-flex'>
                <div className='container-header'>Let's catch up !</div>
                {
                    socialMedias.map(acc => {
                        return <div key={acc.id} className="container-flex-item">
                            <div className='socialMedia-wrapper'>
                                <a href={acc.link}>
                                    <div><i className={acc.class_name}></i></div>
                                    <div className='socialMedia-name'>{acc.name}</div>
                                    </a>
                            </div>
                        </div>
                    })
                }
            </div>
        </Wrapper>
    </>
}

export default ContactUs;