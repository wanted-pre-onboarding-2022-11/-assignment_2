import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    margin-bottom: 20px;
  }

  > button {
    color: #4e4e4e;
    font-size: 24px;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }
`;
