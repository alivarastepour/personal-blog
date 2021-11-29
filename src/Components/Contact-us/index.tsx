import {Wrapper} from "./Contact-us.styles";
import React, {useState} from "react";
import './styles.scss'
import {socialMedias} from "./socialMedia-data";
import {handleCopy} from "./copy-to-clipboard";


const ContactUs = () => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    return <>
        <Wrapper className='container glass-contact-us'>
            <div className='container-body-flex'>
                <div className='container-header'>Let's be in touch !</div>
                {
                    socialMedias.map(acc => {
                        return <div
                                    key={acc.id}
                                    className="container-flex-item">
                            <div className='socialMedia-wrapper'>

                                {
                                    acc.newTab ?
                                        <a
                                            href={acc.link}
                                            rel='noreferrer'
                                            target='_blank'
                                        >
                                        <div><i className={acc.class_name}>
                                        </i></div>
                                        <div className='socialMedia-name'>{acc.name}</div>
                                        </a>
                                        :
                                        <button onClick={() => handleCopy(acc.link, acc.name==='Telegram' ? setShow : setShow1)}>
                                            <div><i className={acc.class_name}>
                                            </i></div>
                                            <div className='socialMedia-name'>{acc.name}</div>
                                            <div
                                                className={acc.name === 'Telegram' && show ? 'msg msg-show' : acc.name === 'Gmail' && show1 ? 'msg msg-show' : 'msg msg-hide' }>{acc.msg}</div>
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