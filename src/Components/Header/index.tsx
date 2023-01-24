import { useDispatch } from "react-redux";
import { useContext } from "react";

import "./styles.scss";
import { Wrapper } from "./Header.styles";
import { changeTheme } from "../../globalStates/slice";
import { languageContext } from "../../App";
import { en, fa } from "./Header.text";

const Header = () => {
  const { language, setLanguage } = useContext(languageContext);
  const isPersian = language === "IR";
  const content = isPersian ? fa : en;
  const dispatch = useDispatch();
  return (
    <>
      <Wrapper>
        <div
          className={`container flex-container glass-header ${
            isPersian ? `dirR` : `dirL`
          }`}
        >
          <div className="holder-r">
            <button className="flex-item button">
              <a href="#intro">{content["Home"]}</a>
            </button>
          </div>
          <div className="holder-r">
            <button className="flex-item button">
              <a href="#about">{content["About"]}</a>
            </button>
          </div>
          <div className="holder-r">
            <button className="flex-item button">
              <a href="#contact-us">{content["Contact us"]}</a>
            </button>
          </div>
          <div className="holder-r">
            <button className="flex-item button">
              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/1Q155BAtxajoKFdAc2bk-e9sWgFp1oJfb/view?usp=sharing"
                target="_blank"
              >
                {content["Resume"]}
              </a>
            </button>
          </div>
          <div className="drop-down holder-r">
            <button className="dropbtn flex-item button">
              {content["Language"]["Title"]}
            </button>
            <div className="drop-down-content l">
              <button
                onClick={() => setLanguage("IR")}
                className="drop-down-button"
              >
                {content["Language"]["Persian"]}
              </button>
              <button
                onClick={() => setLanguage("not-IR")}
                className="drop-down-button"
              >
                {content["Language"]["English"]}
              </button>
            </div>
          </div>
          {/* <div className="drop-down holder-r">
            <button className="dropbtn flex-item button">
              {content["Theme"]["Title"]}
            </button>
            <div className="drop-down-content t">
              <button
                onClick={() => dispatch(changeTheme("LIGHT"))}
                className="drop-down-button light"
              >
                {content["Theme"]["Light"]}
              </button>
              <button
                onClick={() => dispatch(changeTheme("DARK"))}
                className="drop-down-button dark"
              >
                {content["Theme"]["Dark"]}
              </button>
              <button
                onClick={() => dispatch(changeTheme("DEFAULT"))}
                className="drop-down-button default"
              >
                {content["Theme"]["Default"]}
              </button>
            </div>
          </div> */}
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
