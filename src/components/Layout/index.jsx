import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Layout() {
  return (
    <Container>
      <Title>angular/angular-cli</Title>
      <Outlet />
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  box-sizing: border-box;
  width: 40rem;
  height: 100vh;
  display: flex;
  justify-content: center;
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
  height: 2.5rem;
  border-radius: 1rem;
`;
