import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import { fetchInfo } from '../API/fetchInfo';

export default function FailurePredictionChart({ chartWidth, chartHeight, states, requestIdx }) {
  const timeCategories = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'];

  const chartSeries = [
    {
      name: '상태',
      data: states.map((isBreak, index) => ({
        x: timeCategories[index],
        y: 1,
        fillColor:
          isBreak === null
            ? 'rgba(0,0,0,0)' // 데이터 미수신: 투명
            : isBreak
            ? '#F44336' // 고장
            : '#4CAF50', // 정상
      })),
    },
  ];

  const chartOptions = {
    chart: {
      type: 'bar',
      height: chartHeight,
      toolbar: { show: true },
    },
    plotOptions: {
      bar: {
        columnWidth: '80%',
        distributed: false,
        dataLabels: { position: 'top' },
      },
    },
    title: {
      text: '연료 전지 고장 진단',
      align: 'left',
      style: { fontSize: '16px', color: '#333333', fontWeight: 'bold' },
    },
    xaxis: {
      categories: timeCategories,
      labels: { style: { fontSize: '12px' } },
    },
    yaxis: { show: false, max: 1 },
    dataLabels: {
      enabled: true,
      formatter: () => '',
      style: { colors: ['#333'] },
    },
    tooltip: {
      enabled: true,
      custom: ({ dataPointIndex }) => {
        const time = timeCategories[dataPointIndex];
        const status =
          states[dataPointIndex] === null ? '데이터 수신 중' : states[dataPointIndex] ? '고장' : '정상';
        return `
          <div style="padding:8px;">
            <strong>시간 </strong> ${time}<br/>
            <strong>상태 </strong> ${status}
          </div>
        `;
      },
    },
    fill: { opacity: 0.9 },
  };

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      width={chartWidth}
      height={chartHeight}
    />
  );
}
