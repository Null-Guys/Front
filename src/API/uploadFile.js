import axios from 'axios';

export async function uploadFile(filename, file) {
  const formData = new FormData();
  formData.append('filename', filename);
  formData.append('file', file);

  const response = await axios.post('http://localhost:3000/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}

// 예: input[type="file"]의 파일 객체 사용
// const fileInput = document.querySelector('input[type="file"]');
// const file = fileInput.files[0];
// const result = await uploadFile('image.jpg', file);
