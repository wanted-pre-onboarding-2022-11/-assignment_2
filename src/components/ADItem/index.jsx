import React from "react";
import styled from "styled-components";

function ADItem() {
  return (
    <Container>
      <img
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
        alt="원티드광고"
      />
    </Container>
  );
}

export default ADItem;

const Container = styled.div`
  height: 8rem;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;
