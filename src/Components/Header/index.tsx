import {Wrapper} from "./Header.styles";

const Header = () => {
    return <>
        <Wrapper>
            <div className='container flex-container'>
                <button className='flex-item button'>About</button>
                <button className='flex-item button'>Home</button>
                <button className='flex-item button'>Contact us</button>
            </div>
        </Wrapper>
    </>
}

export default Header;