import { useContext } from "react";

import { Wrapper } from "./Skills.styles";

import "./styles.scss";

import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

import { languageContext } from "../../App";

import { Fade } from "react-awesome-reveal";

import { header, SKILLS } from "./Skills.text";

const Skills = () => {
  const { language } = useContext(languageContext);
  const isPersian = language === "IR";

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "black",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  return (
    <>
      <Fade direction="up" delay={50} triggerOnce>
        <Wrapper className="container-skills">
          <div
            className={`header-skills ${isPersian ? "display-6" : "display-4"}`}
          >
            {isPersian ? header["fa"] : header["en"]}
          </div>
          <div className="flex-skills">
            {SKILLS.map((skill) => {
              return (
                <div className="skill-items">
                  <div className="skill-header">{skill.title}</div>
                  <div>
                    <StyledRating
                      key={skill.id}
                      precision={0.5}
                      icon={<CircleRoundedIcon color="info" />}
                      emptyIcon={<CircleOutlinedIcon color="disabled" />}
                      disabled
                      value={skill.value}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Wrapper>
      </Fade>
    </>
  );
};

export default Skills;
