import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <Main>
        <Title>Angular / Angular-cli</Title>
      </Main>
      <div>{children}</div>
    </Container>
  );
};

export default Layout;

export const Container = styled.main`
  width: 100vw;
`;
export const Main = styled.main`
  margin: auto;
  overflow-y: auto;
  @media (max-width: 412px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  margin-top: 10px;
  text-align: center;
`;
