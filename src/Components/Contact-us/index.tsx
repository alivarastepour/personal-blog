import {Wrapper} from "./Contact-us.styles";
import  {useState, useContext} from "react";
import './styles.scss'
import {en, fa} from "./socialMedia-data";
import {handleCopy} from "./copy-to-clipboard";
import { languageContext } from "../../App";



const ContactUs = () => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const {language, setLanguage} = useContext(languageContext);
    const isPersian = language === 'IR';
    const content = isPersian ? fa : en ;
    return <>
        <Wrapper id="contact-us" className='container glass-contact-us'>
            <div className='container-body-flex'>
                <div className='container-header'>{isPersian ? 'با من در ارتباط باش' : 'Let\'s stay in touch'}</div>
                {
                    content.map(acc => {
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
                                        <button onClick={() => handleCopy(acc.link, acc.name==='Telegram' || acc.name==='تلگرام' ? setShow : setShow1)}>
                                            <div><i className={acc.class_name}>
                                            </i></div>
                                            <div className='socialMedia-name'>{acc.name}</div>
                                            <div
                                                className={(acc.name === 'Telegram' || acc.name === 'تلگرام') && show ? 'msg msg-show' :( acc.name === 'Gmail' || acc.name === 'جیمیل') && show1 ? 'msg msg-show' : 'msg msg-hide' }>{acc.msg}</div>
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