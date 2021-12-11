import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 150px;
  height: 600px;  
  max-width: 1600px;
  padding: 100px;
  border-radius: 12px;
  font-family: 'Raleway', 'Tanha', sans-serif;

  @media only screen and (max-width: 860px){
    &{
      padding: 35px;
    }
    .details{
      font-size: 1.9rem ;
    }
  }
  @media only screen and (max-width: 750px){
    &{
      padding : 30px ;
    }
    .details{
      font-size: 1.9rem ;
    }
  }
  @media only screen and (max-width: 460px){
    & {
      padding: 20px ;
    }
    .details{
      font-size: 1.58rem ;
    }
  }
`;
