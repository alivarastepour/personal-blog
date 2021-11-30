import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex ;
    justify-content: center ;
`;

export const Content = styled.div`
    width: 80px;
    height: 80px;
    border-top: 4px #30508c solid;
    border-right: 4px #3e598c solid;
    // border-left: 4px black solid ;
    border-bottom: none ;
    animation: 3s spin infinite linear;
    border-radius: 50% ;

    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
`;