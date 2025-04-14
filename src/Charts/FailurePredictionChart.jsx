import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

export default function FailurePredictionChart({ chartWidth, chartHeight }) {
  const [content, setContent] = useState({
    series: [
      {
        name: '정상',
        data: [99, 98, 97, 95, 90, 96, 94],
      },
      {
        name: '고장',
        data: [1, 2, 3, 5, 10, 4, 6],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        fontFamily: 'Pretendard, sans-serif',
        height: 350,
        stacked: true,
        stackType: '100%',
      },
      title: {
        text: '센서별 고장 예측',
        align: 'left', // 가운데 정렬
        style: {
          fontSize: '16px',
          color: '#333333',
          fontWeight: 'bold',
        },
      },
      // 반응형 디자인
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       legend: {
      //         position: 'bottom',
      //         offsetX: -10,
      //         offsetY: 0,
      //       },
      //     },
      //   },
      // ],
      xaxis: {
        categories: ['모델명1', '모델명2', '모델명3', '모델명4', '모델명5', '모델명6', '모델명7'],
        labels: {
          style: {
            fontSize: '14px',
            color: '#333333',
          },
        },
      },
      yaxis: {
        title: {
          text: '고장 예측(정확도)',
          style: {
            fontSize: '14px',
            color: '#333333',
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50,
      },
    },
  });

  return (
    <>
      <ReactApexChart
        options={content.options}
        series={content.series}
        type="bar"
        width={chartWidth}
        height={chartHeight}
      />
    </>
  );
}
