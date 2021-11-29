import {Wrapper} from "./Contact-us.styles";
import React from "react";
import './styles.scss'
import {socialMedias} from "./socialMedia-data";
import {copyToClipboard} from "./copy-to-clipboard";


const ContactUs = () => {

    return <>
        <Wrapper className='container glass-contact-us'>
            <div className='container-body-flex'>
                <div className='container-header'>Let's be in touch !</div>
                {
                    socialMedias.map(acc => {
                        return <div key={acc.id} className="container-flex-item">
                            <div className='socialMedia-wrapper'>

                                {
                                    acc.newTab ?
                                        <a href={acc.link} rel='noreferrer' target='_blank'>
                                        <div><i className={acc.class_name}></i></div>
                                        <div className='socialMedia-name'>{acc.name}</div>
                                        </a>
                                        :
                                        <button onClick={() => copyToClipboard(acc.link)}>
                                            <div><i className={acc.class_name}></i></div>
                                            <div className='socialMedia-name'>{acc.name}</div>
                                        </button>
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </Wrapper>
    </>
}

export default ContactUs;