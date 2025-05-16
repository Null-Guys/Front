import React from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

export default function FailurePredictionChart({ chartWidth, chartHeight, states, timeLabels, requestIdx }) {
  const paddedStates = [...states, ...Array(7 - states.length).fill(null)];

  const chartSeries = [
    {
      name: '상태',
      data: timeLabels.map((label, idx) => ({
        x: label,
        y: 1,
        fillColor: paddedStates[idx] === null ? 'rgba(0,0,0,0)' : paddedStates[idx] ? '#F44336' : '#4CAF50',
      })),
    },
  ];

  const chartOptions = {
    chart: {
      type: 'bar',
      fontFamily: 'Pretendard, sans-serif',
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
      categories: timeLabels,
      labels: { style: { fontSize: '14px', color: '#333333' } },
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
        const time = timeLabels[dataPointIndex];
        const status =
          paddedStates[dataPointIndex] === null
            ? '데이터 수신 중'
            : paddedStates[dataPointIndex]
            ? '고장'
            : '정상';
        return `
          <div style="padding:8px;">
            <strong>시간&nbsp;&nbsp;</strong> ${time}<br/>
            <strong>상태&nbsp;&nbsp;</strong> ${status}
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
