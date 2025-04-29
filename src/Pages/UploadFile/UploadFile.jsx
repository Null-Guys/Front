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

// 스타일 컴포넌트 TODO: 추후 변경 예정
const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;
`;

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  width: 400px;
`;

const Title = styled.h2`
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
  display: inline-block;
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
