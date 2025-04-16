import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

export default function FailurePredictionChart({ chartWidth, chartHeight }) {
  const [state, setState] = useState({
    series: [97, 3],
    options: {
      chart: {
        type: 'donut',
        fontFamily: 'Pretendard, sans-serif',
      },
      labels: ['정상', '고장'],
      colors: ['#1eca5d', '#EF4444'], // 정상, 고장 색상 지정
      title: {
        text: '연료 전지 고장 진단',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#333333',
          fontWeight: 'bold',
        },
      },
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       chart: {
      //         width: 200,
      //       },
      //       legend: {
      //         position: 'bottom',
      //       },
      //     },
      //   },
      // ],
    },
  });

  return (
    <ReactApexChart
      type="donut"
      options={state.options}
      series={state.series}
      width={chartWidth}
      height={chartHeight}
    />
  );
}
