import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: 120px auto auto auto;
  height: 700px;
  padding: 50px;
  border-radius: 12px;
  @media only screen and (max-width: 710px) {
    & {
      padding: 20px;
    }
  }
  @media only screen and (max-width: 630px) {
    & {
      height: 1000px;
    }
  }
  @media only screen and (max-width: 630px) {
    & {
      padding: 3px;
    }
  }
  @media only screen and (max-width: 630px) {
    & {
      height: 100%;
    }
  }
  .header-skills {
    font-family: "Raleway", "Tanha", sans-serif;
    text-align: center;
  }
  .flex-skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
    @media only screen and (max-width: 1330px) {
      & {
        margin-top: 20px;
      }
    }
  }
  .skill-items {
    margin: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.05);
    }
    @media only screen and (max-width: 1520px) {
      & {
        margin: 35px;
      }
    }
    @media only screen and (max-width: 1095px) {
      & {
        margin: 15px;
      }
    }
  }
  .skill-header {
    margin-bottom: 10px;
    font-size: 1.4rem;
  }
`;
