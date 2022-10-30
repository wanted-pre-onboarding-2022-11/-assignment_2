import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
`;
export const Main = styled.main`
  margin: auto;
  width: 90%;
  overflow: auto;
`;

export const UserInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Profile = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  @media (max-width: 412px) {
    width: 50px;
    height: 50px;
  }
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.div``;
