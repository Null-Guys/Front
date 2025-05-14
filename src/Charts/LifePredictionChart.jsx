import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import { fetchInfo } from '../API/fetchInfo';

// TODO: 요청한 값이 7개를 초과하면 제일 오래된 것부터 밀리는 로직 필요
export default function LifePredictionChart({ chartWidth, chartHeight }) {
  const [info, setInfo] = useState(null);
  const [voltages, setVoltages] = useState([]);
  const [paddedVoltages, setPaddedVoltages] = useState(Array(7).fill(null));
  const [requestIdx, setRequestIdx] = useState(0); // 요청 순번

  // voltages가 변경될 때마다 paddedVoltages 갱신
  useEffect(() => {
    const newPadded = [...voltages, ...Array(7 - voltages.length).fill(null)];
    setPaddedVoltages(newPadded);
    console.log(paddedVoltages);
  }, [voltages]);

  useEffect(() => {
    let timer;
    const loadInfo = async () => {
      try {
        const data = await fetchInfo(requestIdx);
        console.log(data); // 응답 데이터

        setInfo(data); // 전체 데이터 저장
        setVoltages((prev) => [...prev, data.utot[1]]); // 배열에 누적
        setRequestIdx((prev) => prev + 1); // (옵션) 다음 요청 인덱스 증가
        console.log(data.utot[1]);
      } catch (error) {
        console.error('정보를 가져오는 데 실패했습니다:', error);
      }
    };

    if (requestIdx === 0 && voltages.length === 0) {
      loadInfo(); // 처음 한 번 바로 호출
    } else if (voltages.length < 7) {
      timer = setTimeout(loadInfo, 2000); // 이후엔 n초마다
    }

    return () => clearTimeout(timer);
  }, [requestIdx]);

  const chartOptions = {
    chart: {
      type: 'line',
      fontFamily: 'Pretendard, sans-serif',
      height: 350,
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'straight',
      colors: ['#008FFB'], // 선 색상 명시
      width: 3, // 선 두께
      show: true, // 선 표시 강제
    },
    title: {
      text: '연료 전지 수명 예측',
      align: 'left',
      style: { fontSize: '16px', color: '#333333', fontWeight: 'bold' },
    },
    grid: {
      row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 },
    },
    xaxis: {
      categories: [0, 30, 60, 90, 120, 150, 180],
      labels: {
        formatter: (val) => `${val}분`,
        style: { fontSize: '14px', colors: '#333333' },
      },
      title: {
        text: '시간',
        style: { fontSize: '14px', color: '#333333' },
      },
    },
    yaxis: {
      min: 3.0, // 최소값
      max: 3.4, // 최대값
      tickAmount: 10, // 눈금 개수
      labels: {
        formatter: function (val) {
          return `${val}V`;
        },
        style: {
          fontSize: '14px',
          colors: '#333333',
        },
      },
      title: {
        text: '전압',
        style: {
          fontSize: '14px',
          color: '#333333',
        },
      },
    },
  };

  const chartSeries = [
    {
      name: 'SOH',
      data: paddedVoltages,
    },
  ];

  return (
    <ReactApexChart options={chartOptions} series={chartSeries} type="line" width={chartWidth} height={350} />
  );
}
