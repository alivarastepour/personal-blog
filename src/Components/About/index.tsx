import {Wrapper} from "./About.styles";
import React from "react";
import './styles.scss'

const About = ()=> {
    return <>
        <Wrapper className='container flex-container'>
            <div className="flex-item-About">
                <div className="card1-header">My story</div>
                <div className="card1-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi, aperiam cupiditate dolorem eligendi hic ipsum, laudantium minima, molestiae nesciunt nostrum odio quae ratione rem reprehenderit sunt tempore. A alias consequuntur, et hic impedit in necessitatibus nobis nostrum optio quas quibusdam sint tempore vitae! Beatae, hic, veniam. Cumque, expedita, vitae?</div>
            </div>
            <div className="flex-item-About image"></div>
        </Wrapper>
    </>
}

export default About;