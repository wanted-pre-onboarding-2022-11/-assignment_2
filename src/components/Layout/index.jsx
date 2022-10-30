import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { IssuesProvider } from "../../context/IssuesProvider";

function Layout() {
  return (
    <Container>
      <Title>angular/angular-cli</Title>
      <IssuesProvider>
        <Outlet />
      </IssuesProvider>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  box-sizing: border-box;
  width: 40rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  @media screen and (max-width: 690px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  background-color: #ff7559;
  color: #fff;
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;
