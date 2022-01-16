import { useContext } from "react";
import { Wrapper } from "./About.styles";
import "./styles.scss";
import { languageContext } from "../../App";
import { en, fa } from "./About.text";
// import Reveal from "react-reveal/Reveal";

const About = () => {
  const { language, setLanguage } = useContext(languageContext);
  const isPersian = language === "IR";
  const content = isPersian ? fa : en;
  return (
    <>
      {/* <Reveal effect="fadeInUp"> */}
      <Wrapper id="about" className={`container flex-container-about`}>
        <div className={`flex-item-About ${isPersian ? "dirR" : "dirL"}`}>
          <div className="card1-header">{content["Title"]}</div>
          <div className="card1-body">{content["Content"]}</div>
        </div>
        <div className="flex-item-About image"></div>
      </Wrapper>
      {/* </Reveal> */}
    </>
  );
};

export default About;
