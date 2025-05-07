import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

export default function LifePredictionChart({ chartWidth, chartHeight }) {
  const [content, setContent] = useState({
    series: [
      {
        name: 'SOH',
        data: [19, 18, 17.5, 17, 16.5, 15, 14.8],
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
        categories: [4, 5, 6, 7, 8, 9, 10],
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
          text: '시간',
          style: {
            fontSize: '14px',
            color: '#333333',
          },
        },
      },
      yaxis: {
        min: 10, // 최소값 (10V)
        max: 20, // 최대값 (100V)
        tickAmount: 5, // 눈금 개수 (10, 12, 14, 16, 18, 20)
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
