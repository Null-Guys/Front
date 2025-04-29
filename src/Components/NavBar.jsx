import { useState } from 'react';
import styled from 'styled-components';

export default function NavBar() {
  return (
    <Container>
      <img src="" alt="로고" />
      <button>파일 업로드</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  position: fixed;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  z-index: 100;
`;
