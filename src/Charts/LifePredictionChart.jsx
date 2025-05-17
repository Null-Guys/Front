import React from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

export default function LifePredictionChart({ chartWidth, voltages, requestCnt }) {
  const paddedVoltages = [...voltages, ...Array(7 - voltages.length).fill(null)];

  const baseX = 30 * (requestCnt <= 7 ? 1 : requestCnt - 6); // 시작값
  const xCategories = Array.from({ length: 7 }, (_, i) => baseX + i * 30); // 30분 간격 7개

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
      categories: xCategories,
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
      min: 3.2, // 최소값
      max: 3.35, // 최대값
      tickAmount: 6, // 눈금 개수
      labels: {
        formatter: function (val) {
          return `${val.toFixed(2)}V`;
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
    markers: {
      size: 5, // 점 크기
      colors: ['#008FFB'], // 점 색상
      strokeColors: '#fff', // 점 테두리 색상
      strokeWidth: 2, // 점 테두리 두께
      hover: { size: 7 }, // 마우스 오버 시 점 크기
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val === null || val === undefined ? '데이터 수신 중' : `SOH: ${val.toFixed(6)}%`;
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
