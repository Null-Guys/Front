import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function UploadFile({ setHasUploaded }) {
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.csv')) {
      setFileName(file.name);
      localStorage.setItem('uploadedCsv', 'true'); // 로컬 스토리지에 업로드 상태 === true로 변경
      setHasUploaded(true); // 업로드된 상태로 변경
      navigate('/dashboard');
    } else {
      alert('CSV 파일만 업로드할 수 있습니다.');
    }
  };

  return (
    <Container>
      <Card>
        <Title>파일 업로드</Title>
        <Description>CSV 파일을 업로드해 주세요.</Description>
        <FileInputLabel htmlFor="file-upload">파일 선택</FileInputLabel>
        <FileInput id="file-upload" type="file" accept=".csv" onChange={handleFileChange} />
        {fileName && <FileName>업로드된 파일: {fileName}</FileName>}
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  max-width: 600px;
  min-width: 400px;
  border-radius: 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.09);
  padding: 16px;
`;

const Title = styled.h2`
  color: #333333;
  font-size: 24px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 24px;
`;

const FileInputLabel = styled.label`
  background-color: #1976d2;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
  margin-bottom: 16px;
  font-weight: 500;
`;

const FileInput = styled.input`
  display: none;
`;

const FileName = styled.p`
  margin-top: 12px;
  font-size: 14px;
  color: #333;
`;
