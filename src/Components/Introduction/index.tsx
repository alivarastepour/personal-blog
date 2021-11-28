import {Wrapper, Logo} from "./Introduction.styles";
import './styles.scss';

const Introduction = ()=> {
    return <>
        <Wrapper className='container glass grid-container'>
            <div className='grid-item content'>
                <h1 className='display-2 header'>Welcome to my personal blog !</h1>
                <div className='details'>
                    Hi everyone. My name is Ali Varaste Pour. I am a student at
                    <a target='_blank' className='link' href="https://www.sbu.ac.ir/" rel='noreferrer'> Shahid beheshti university of Tehran</a>.
                      I spend my time mostly on learning new stuff; As i am young and passionate, im trying to find my area of expertise; Like they say:
                    <br/>
                    <br/>
                    <blockquote className='blockquote-footer'>i'm practically new around so don't bother</blockquote>
                </div>
            </div>
        </Wrapper>
    </>
}

export default Introduction;