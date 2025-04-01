import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function HeatMap({ chartWidth }) {
  const data = [
    {
      name: 'Team A',
      data: [90, 80, 70, 60, 50, 40, 30, 20],
    },
    {
      name: 'Team B',
      data: [20, 30, 40, 50, 60, 70, 80, 90],
    },
    {
      name: 'Team C',
      data: [10, 20, 30, 40, 50, 60, 70, 80],
    },
    {
      name: 'Team D',
      data: [80, 70, 60, 50, 40, 30, 20, 10],
    },
    {
      name: 'Team E',
      data: [15, 25, 35, 45, 55, 65, 75, 85],
    },
  ];

  const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];

  const [content, setContent] = useState({
    series: data,
    options: {
      chart: {
        height: 450,
        type: 'heatmap',
        fontFamily: 'Pretendard, sans-serif',
      },
      dataLabels: {
        enabled: false,
      },
      colors: colors,
      xaxis: {
        type: 'category',
        categories: [
          '10:00',
          '10:30',
          '11:00',
          '11:30',
          '12:00',
          '12:30',
          '01:00',
          '01:30',
        ],
      },
      title: {
        text: 'HeatMap Chart (Different color shades for each series)',
        align: 'center', // 가운데 정렬
        style: {
          fontSize: '16px',
          color: '#333333',
          fontWeight: 'bold',
        },
      },
      grid: {
        padding: {
          right: 20,
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={content.options}
          series={content.series}
          type="heatmap"
          height={450}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
