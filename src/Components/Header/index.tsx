import {Wrapper} from "./Header.styles";
import './styles.scss';
const Header = () => {
    return <>
        <Wrapper>
            <div className='container flex-container glass-header'>
            <div>
                <button className='flex-item button'>Home</button>
                </div>
                <div>
                <button className='flex-item button'>About</button>
                </div>
                <div>
                <button className='flex-item button'>Contact us</button>
                </div>
            </div>
        </Wrapper>
    </>
}

export default Header;