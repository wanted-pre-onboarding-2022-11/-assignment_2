import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  background: yellow;
`;
export const Main = styled.main`
  margin: auto;
  width: 70%;

  @media (max-width: 412px) {
    width: 90%;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  background-color: #e3e7e5;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const Text = styled.div``;

export const Banner = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
`;
