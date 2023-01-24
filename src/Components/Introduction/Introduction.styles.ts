import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 100px;
  max-width: 1300px;
  padding: 50px;
  border-radius: 12px;
  font-family: "Raleway", "Tanha", sans-serif;

  @media only screen and (max-width: 520px) {
    & {
      padding: 20px;
    }
  }
`;
