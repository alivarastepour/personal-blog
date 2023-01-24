import styled from "styled-components";
export const Wrapper = styled.div`
  font-family: "Raleway", "Tanha", sans-serif;
  font-size: 1.4rem;
  position: sticky;
  top: 0;
  z-index: 10;
  /* width: 100px; */

  .container {
    max-width: 900px;
    border-radius: 12px;
  }
  .dirR {
    direction: rtl;
  }
  .dirL {
    direction: ltr;
  }

  .flex-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .button {
    outline: none;
    border: none;
    background-color: transparent;
    height: 60px;
    width: 100%;
    border-radius: 12px;
  }

  .button:hover {
    transition: 1s;
    background-color: rgba(199, 203, 255, 0.41);
  }

  .button:not(:hover) {
    transition: 0.4s;
  }
  .drop-down-content {
    display: none;
    position: absolute;
    margin-top: 1px;
    border-radius: 1px 1px 5px 5px;
  }
  .drop-down:hover .drop-down-content {
    display: block;
  }
  .drop-down-button {
    display: block;
    outline: none;
    border: none;
    background-color: transparent;
    height: 30px;
    width: 100px;
    font-size: 1rem;
  }
  .light:hover {
    transition: 1s;
    background-color: white;
  }
  .dark:hover {
    transition: 1s;
    background-color: black;
    color: white;
  }
  .default:hover {
    transition: 1s;
    background-color: rgba(199, 203, 255, 0.41);
  }
  .drop-down-button:not(:hover) {
    transition: 0.4s;
  }
  @media only screen and (max-width: 600px) {
    & {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 400px) {
    & {
      font-size: 1.3rem;
    }
    .flex-container {
      display: block;
    }
    .holder-r {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      .button {
        width: 100%;
      }
    }
    .l {
      top: 300px;
    }
    .t {
      top: 360px;
    }
    .drop-down-button {
      margin: auto;
    }
    .drop-down-button:hover {
      border-radius: 7px;
    }
    & {
      position: relative;
    }
  }
`;
