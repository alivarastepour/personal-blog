import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
    width: 100px;
    height: 100px;
    border-bottom: none ;
    animation: 3s spin infinite linear;
    border-radius: 50% ;
    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
`;