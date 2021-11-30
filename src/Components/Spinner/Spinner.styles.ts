import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
    width: 100px;
    height: 100px;
    border-top: 4px #30508c solid;
    border-right: 4px #3e598c solid;
    border-bottom: none ;
    animation: 3s spin infinite linear;
    border-radius: 50% ;
    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
`;