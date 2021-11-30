import styled from "styled-components";
export const Wrapper = styled.div`

  font-family: 'Raleway', sans-serif;
  font-size: 1.4rem;

  .container {
    max-width: 800px;
    border-radius: 12px;
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
    width: 180px;
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