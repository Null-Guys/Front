import axios from 'axios';

export async function fetchInfo(time) {
  const response = await axios.get('http://localhost:5000/information', {
    params: { time },
  });

  return response.data;
}
