import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar({ setHasUploaded }) {
  const navigate = useNavigate();

  const handleResetUpload = () => {
    localStorage.removeItem('uploadedCsv'); // 1. 로컬스토리지 값 삭제
    setHasUploaded(false);
    navigate('/'); // 2. 업로드 페이지로 이동
  };

  return (
    <Container>
      <img src="" alt="로고" />
      <UploadButton onClick={handleResetUpload}>파일 업로드</UploadButton>
    </Container>
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
