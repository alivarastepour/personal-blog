import {Wrapper} from "./Header.styles";
import './styles.scss';
import {useDispatch} from "react-redux";
import {changeTheme} from "../../globalStates/slice";
import { languageContext } from "../../App";
import { useContext } from "react";
const Header = () => {
    const {language, setLanguage} = useContext(languageContext);
    
    const dispatch = useDispatch();
    return <>
        <Wrapper>
            <div className='container flex-container glass-header'>
                <div className="holder-r">
                <button className='flex-item button'><a href="#intro">Home</a></button>
                </div>
                <div className="holder-r">
                <button className='flex-item button'><a href="#about">About</a></button>
                </div>
                <div className="holder-r">
                <button className='flex-item button'><a href="#contact-us">contact us</a></button>
                </div>
                <div className="holder-r">
                <button className='flex-item button'><a rel='noreferrer' href='https://drive.google.com/file/d/1-brDEJyYatceHoFlw_SyJku0VR0Ix0w0/view?usp=sharing' target='_blank'>Resume</a></button>
                </div>
                <div className="drop-down holder-r">
                    <button className="dropbtn flex-item button">language</button>
                        <div className="drop-down-content l">
                            <button onClick={() => setLanguage('persian')} className="drop-down-button">Persian</button>
                            <button onClick={() => setLanguage('english')} className="drop-down-button">English</button>
                        </div>
                </div>
                <div className="drop-down holder-r">
                    <button className="dropbtn flex-item button">theme</button>
                        <div className="drop-down-content t">
                            <button onClick={() => dispatch(changeTheme('LIGHT'))} className="drop-down-button light">Light</button>
                            <button onClick={() => dispatch(changeTheme('DARK'))} className="drop-down-button dark">Dark</button>
                            <button onClick={() => dispatch(changeTheme('DEFAULT'))} className="drop-down-button default">Default</button>
                        </div>
                </div>
            </div>
        </Wrapper>
    </>
}

export default Header;