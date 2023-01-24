import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: 120px auto auto auto;
  border-radius: 12px;

  .header-skills {
    font-family: "Raleway", "Tanha", sans-serif;
    text-align: center;
  }
  .header-skills.sub-header {
    font-size: 1.5rem;
  }
  .flex-skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
  }

  .skill-header {
    margin-bottom: 10px;
    font-size: 1.4rem;
  }

  .list-item {
    font-family: "Raleway", "Tanha", sans-serif;
    font-size: 1.2rem;
  }
  .rtl {
    direction: rtl;
    text-align: right;
  }
  .ltr {
    display: ltr;
    text-align: left;
  }
`;
