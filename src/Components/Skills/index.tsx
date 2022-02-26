import { Wrapper } from "./Skills.styles";
import "./styles.scss";

import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

const Skills = () => {
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
      <Wrapper className="container-skills">
        <div className="header-skills display-4">skills</div>
        <div>
          <StyledRating
            precision={0.5}
            icon={<CircleRoundedIcon />}
            emptyIcon={<CircleOutlinedIcon color="disabled" />}
            defaultValue={3}
            disabled
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Skills;
