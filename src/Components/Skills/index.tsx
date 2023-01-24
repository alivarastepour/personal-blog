import { useContext } from "react";

import { Wrapper } from "./Skills.styles";

import "./styles.scss";

import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";

import { languageContext } from "../../App";

import {
  header,
  TECHNICAL_SKILLS_EN,
  TECHNICAL_SKILLS_FA,
  SOFT_SKILLS_EN,
  SOFT_SKIILS_FA,
} from "./Skills.text";

const Skills = () => {
  const { language } = useContext(languageContext);
  const isPersian = language === "IR";
  const softContent = isPersian ? SOFT_SKIILS_FA : SOFT_SKILLS_EN;
  const techContent = isPersian ? TECHNICAL_SKILLS_FA : TECHNICAL_SKILLS_EN;
  return (
    <>
      {/* <Fade direction="up" delay={50} triggerOnce> */}
      <Wrapper className="container-skills">
        <div
          className={`header-skills ${isPersian ? "display-6" : "display-4"}`}
        >
          {isPersian ? header["fa"]["main"] : header["en"]["main"]}
        </div>
        <div className="flex-skills">
          <div>
            <div
              className={`header-skills sub-header ${
                isPersian ? "rtl" : "ltr"
              }`}
            >
              <h2>{isPersian ? header["fa"]["soft"] : header["en"]["soft"]}</h2>
            </div>
            <div>
              <ul>
                {softContent.map((skill) => {
                  return (
                    <li
                      className={`list-item ${isPersian ? "rtl" : "ltr"}`}
                      key={skill.id}
                    >
                      {skill.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <div
              className={`header-skills sub-header ${
                isPersian ? "rtl" : "ltr"
              }`}
            >
              <h2>{isPersian ? header["fa"]["tech"] : header["en"]["tech"]}</h2>
            </div>
            <div>
              <ul>
                {techContent.map((skill) => {
                  return (
                    <li
                      className={`list-item ${isPersian ? "rtl" : "ltr"}`}
                      key={skill.id}
                    >
                      {skill.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
      {/* </Fade> */}
    </>
  );
};

export default Skills;
