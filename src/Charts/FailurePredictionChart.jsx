import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

export default function FailurePredictionChart({ chartWidth, chartHeight }) {
  const statusData = [
    { time: '10:00', type: 'normal' },
    { time: '10:30', type: 'normal' },
    { time: '11:00', type: 'normal' },
    { time: '11:30', type: 'failure' },
    { time: '12:00', type: 'normal' },
  ];

  const [chartState] = useState({
    series: [
      {
        name: '상태',
        data: statusData.map((item) => ({
          x: item.time,
          y: 1,
          fillColor: item.type === 'normal' ? '#4CAF50' : '#F44336',
        })),
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: chartHeight,
        toolbar: {
          show: true, // 오른쪽 위 메뉴 표시
          tools: {
            download: true, // 다운로드 버튼 활성화
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
          distributed: false,
          dataLabels: {
            position: 'top',
          },
        },
      },
      title: {
        text: '연료 전지 고장 진단',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#333333',
          fontWeight: 'bold',
        },
      },
      xaxis: {
        type: 'category',
        categories: statusData.map((item) => item.time),
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        show: false,
        max: 1,
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return '';
        },
        style: {
          fontSize: '12px',
          colors: ['#333'],
        },
      },
      fill: {
        opacity: 0.9, // 1이면 완전 불투명, 0.85가 기본값
      },
      tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          const item = statusData[dataPointIndex];
          return `<div style="padding:8px;">
            <strong>시간:</strong> ${item.time}<br/>
            <strong>상태:</strong> ${item.type === 'normal' ? '정상' : '고장'}
          </div>`;
        },
      },
      legend: {
        show: false,
      },
    },
  });

  return (
    <ReactApexChart
      options={chartState.options}
      series={chartState.series}
      type="bar"
      width={chartWidth}
      height={chartHeight}
    />
  );
}
