import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function BasicColumnChart({ chartWidth }) {
  const BasicColumnOptions = {
    chart: {
      type: 'bar',
      fontFamily: 'Pretendard, sans-serif',
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
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `$ ${val} thousands`,
      },
    },
  };

  const BasicColumnData = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];

  return (
    <Chart
      options={BasicColumnOptions}
      series={BasicColumnData}
      type="bar"
      width={chartWidth}
      // height={350}
    />
  );
}

export default BasicColumnChart;
