import { useState } from 'react';
import styled from 'styled-components';
import UploadModal from './UploadModal';

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container>
        <img src="" alt="로고" />
        <UploadButton onClick={() => setIsModalOpen(true)}>파일 업로드</UploadButton>
      </Container>
      {isModalOpen && <UploadModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  position: fixed;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  z-index: 100;
`;

const UploadButton = styled.button`
  width: fit-content;
  height: 40px;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background-color: #1976d2;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1565c0;
  }

  &:active {
    background-color: #0d47a1;
  }
`;
