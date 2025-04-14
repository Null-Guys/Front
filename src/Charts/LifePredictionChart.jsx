import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function LifePredictionChart({ chartWidth }) {
  const BasicColumnOptions = {
    chart: {
      type: 'bar',
      fontFamily: 'Pretendard, sans-serif',
    },
    title: {
      text: '센서별 수명 예측',
      align: 'left',
      style: {
        fontSize: '16px',
        color: '#333333',
        fontWeight: 'bold',
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        '모델명1',
        '모델명2',
        '모델명3',
        '모델명4',
        '모델명5',
        '모델명6',
        '모델명7',
      ],
      labels: {
        style: {
          fontSize: '14px',
          color: '#333333',
        },
      },
    },
    yaxis: {
      title: {
        text: '남은 수명(일)',
        style: {
          fontSize: '14px',
          color: '#333333',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `$ ${val}일`,
      },
    },
  };

  const BasicColumnData = [
    {
      name: '남은 수명',
      data: [44, 55, 57, 56, 61, 20, 30],
    },
  ];

  return (
    <Chart
      options={BasicColumnOptions}
      series={BasicColumnData}
      type="bar"
      width={chartWidth}
      height={350}
    />
  );
}

export default LifePredictionChart;
