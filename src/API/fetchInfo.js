import axios from 'axios';

export async function fetchInfo(filename, time) {
  const response = await axios.get('http://localhost:3000/information', {
    params: { filename, time },
  });

  return response.data;
}
