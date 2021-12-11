import {useContext} from "react";
import {Wrapper} from "./Footer.styles";
import './styles.scss'
import { languageContext } from "../../App";


const Footer = () => {
    const {language, setLanguage} = useContext(languageContext);
    const isPersian = language === 'IR';
    return <>
        <Wrapper className='glass-footer'>
            <div className={`info ${isPersian ? 'dirR' : 'dirL'}`}>
                <div>{isPersian ? 'توسعه با ' : 'powered by '}</div>
                <i className="fab fa-react animate"></i>
            </div>
        </Wrapper>
    </>
}
export default Footer;