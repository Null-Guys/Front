import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

// TODO: 최신 7개 데이터만 사용되는지 확인 필요 (x축은 아직 변경x)
export default function LifePredictionChart({ chartWidth, chartHeight, voltages, requestIdx }) {
  const paddedVoltages = [...voltages, ...Array(7 - voltages.length).fill(null)];
  // console.log('paddedVoltages', paddedVoltages);
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
      categories: [30, 60, 90, 120, 150, 180, 210],
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
      min: 3.32, // 최소값
      max: 3.35, // 최대값
      tickAmount: 20, // 눈금 개수
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
    markers: {
      size: 5, // 점 크기
      colors: ['#008FFB'], // 점 색상
      strokeColors: '#fff', // 점 테두리 색상
      strokeWidth: 2, // 점 테두리 두께
      hover: { size: 7 }, // 마우스 오버 시 점 크기
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
