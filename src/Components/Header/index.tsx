import {Wrapper} from "./Header.styles";
import './styles.scss';
import {useDispatch} from "react-redux";
import {changeTheme} from "../../globalStates/slice";

const Header = () => {
    const dispatch = useDispatch();
    return <>
        <Wrapper>
            <div className='container flex-container glass-header'>
                <div>
                <button className='flex-item button'><a href="#intro">Home</a></button>
                </div>
                <div>
                <button className='flex-item button'><a href="#about">About</a></button>
                </div>
                <div>
                <button className='flex-item button'><a href="#contact-us">contact us</a></button>
                </div>
                <div className="drop-down">
                    <button className="dropbtn flex-item button">theme</button>
                        <div className="drop-down-content">
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