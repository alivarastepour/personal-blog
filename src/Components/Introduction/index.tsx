import { useContext } from "react";
import { Wrapper } from "./Introduction.styles";
import "./styles.scss";
import { languageContext } from "../../App";
import { en, fa } from "./Introduction.text";

const Introduction = () => {
  const { language, setLanguage } = useContext(languageContext);
  const isPersian = language === "IR";
  const content = isPersian ? fa : en;
  return (
    <>
      <Wrapper
        id="intro"
        className={`container glass grid-container ${
          isPersian ? "dirR" : "dirL"
        }`}
      >
        <div className="grid-item content">
          <h1 className="display-2 header">{content["Title"]}</h1>
          <div className="details">{content["Paragraph"]}</div>
        </div>
      </Wrapper>
    </>
  );
};

export default Introduction;
