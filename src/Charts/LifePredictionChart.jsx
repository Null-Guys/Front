import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

export default function LifePredictionChart({ chartWidth, chartHeight }) {
  const [content, setContent] = useState({
    series: [
      {
        name: 'SOH',
        data: [91, 90, 85, 82, 79, 76, 70],
      },
    ],
    options: {
      chart: {
        type: 'line',
        fontFamily: 'Pretendard, sans-serif',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: '연료 전지 수명 예측',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#333333',
          fontWeight: 'bold',
        },
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [10, 9, 8, 7, 6, 5, 4],
        labels: {
          formatter: function (val) {
            return `${val}h`;
          },
          style: {
            fontSize: '14px',
            colors: '#333333',
          },
        },
        title: {
          text: '남은 수명',
          style: {
            fontSize: '14px',
            color: '#333333',
          },
        },
      },
      yaxis: {
        min: 50, // 최소값 (50%)
        max: 100, // 최대값 (100%)
        tickAmount: 5, // 눈금 개수 (50, 60, 70, 80, 90, 100)
        labels: {
          formatter: function (val) {
            return `${val}%`;
          },
          style: {
            fontSize: '14px',
            colors: '#333333',
          },
        },
        title: {
          text: 'SOH',
          style: {
            fontSize: '14px',
            color: '#333333',
          },
        },
      },
    },
  });

  return (
    <ReactApexChart
      options={content.options}
      series={content.series}
      type="line"
      width={chartWidth}
      height={350}
    />
  );
}
