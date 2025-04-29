import { useState } from 'react';
import styled from 'styled-components';

export default function UploadModal({ setIsModalOpen }) {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      alert('CSV 파일만 업로드할 수 있습니다.');
      return;
    }

    // TODO: 서버로 전송하는 로직 추가
  };

  const onClose = () => {
    console.log(`파일 업로드 완료: ${file.name}`);
    setIsModalOpen(false);
  };

  return (
    <Backdrop onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>파일(.csv) 추가 업로드</Title>
        <StyledInput type="file" accept=".csv" onChange={handleFileChange} />
        <UploadButton onClick={onClose}>추가</UploadButton>
      </Modal>
    </Backdrop>
  );
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  &::file-selector-button {
    background-color: #efefef;
    color: #333333;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #dddddd;
    }

    &:active {
      background-color: #dddddd;
    }
  }
`;

const UploadButton = styled.button`
  align-self: flex-end;
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1565c0;
  }

  &:active {
    background-color: #0d47a1;
  }
`;
