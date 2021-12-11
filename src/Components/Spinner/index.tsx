import { Wrapper, Content } from "./Spinner.styles";
import './styles.scss'



const Spinner = () => {
    const theme = localStorage.getItem('theme')?.toLowerCase();    
    return <>
        <Wrapper className={`wrapper ${theme ? `wrapper-${theme}` : `wrapper-default`}`}>
                <Content className={`content ${theme ? `content-${theme}` : `content-default`}`}/>
        </Wrapper>
    </>
}
export default Spinner;