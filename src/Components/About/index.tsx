import { useContext } from "react";
import { Wrapper } from "./About.styles";
import "./styles.scss";
import { languageContext } from "../../AppWrapper";
import { en, fa } from "./About.text";
import { Fade } from "react-awesome-reveal";
import image from "../../assets/photo_2021-11-21_23-43-14.jpg";

const About = () => {
  const { language, setLanguage } = useContext(languageContext);
  const isPersian = language === "IR";
  const content = isPersian ? fa : en;
  return (
    <>
      {/* <Fade direction="up" delay={50} triggerOnce> */}
      <Wrapper id="about" className={`container flex-container-about`}>
        <div className={`flex-item-About ${isPersian ? "dirR" : "dirL"}`}>
          <div className="card1-header">{content["Title"]}</div>
          <div className="card1-body">{content["Content"]}</div>
        </div>
        <div className="flex-item-About image-container">
          <img className="image" src={image} alt="his pic" />
        </div>
      </Wrapper>
      {/* </Fade> */}
    </>
  );
};

export default About;
