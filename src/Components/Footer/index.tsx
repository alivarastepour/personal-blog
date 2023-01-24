import { useContext } from "react";
import { Wrapper } from "./Footer.styles";
import "./styles.scss";
import { languageContext } from "../../App";
import logo from "../../assets/logo.png";
const Footer = () => {
  const { language, setLanguage } = useContext(languageContext);
  const isPersian = language === "IR";
  const content = "";
  return (
    <>
      <Wrapper className="glass-footer">
        <div className={`info ${isPersian ? "dirR" : "dirL"}`}>
          <div>{content}</div>
          {/* <i className="fab fa-react animate"></i> */}
          <img src={logo} alt="a" className="footer-logo" />
        </div>
      </Wrapper>
    </>
  );
};
export default Footer;
