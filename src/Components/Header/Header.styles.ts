import styled from "styled-components";

export const Wrapper = styled.div`

  font-family: 'Raleway', sans-serif;
  font-size: 1.4rem;

  .container {
    max-width: 700px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
  }

  .flex-container {
    display: flex;
    justify-content: space-evenly;
  }

  .button {
    outline: none;
    border: none;
    background-color: transparent;
    height: 60px;
    width: 150px;
    border-radius: 12px;
  }

  .button:hover {
    transition: 1s;
    background-color: rgba(199, 203, 255, 0.41);
  }

  .button:not(:hover) {
    transition: 0.4s;
  }
`;